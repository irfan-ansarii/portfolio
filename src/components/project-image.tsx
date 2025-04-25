"use client";
import React, { useState } from "react";

import Link from "next/link";
import quantize from "quantize";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  title: string;
  href?: string;
  image?: string;
  className?: string;
}
type RGB = [number, number, number];

const ProjectImage = ({ href, className, image, title }: Props) => {
  const [colors, setColors] = useState<RGB[] | RGB[][]>([[], []]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = 100;
    canvas.height = Math.floor((img.height / img.width) * 100);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const pixels = buildRgb(imageData);

    const colorMap = quantize(pixels, 5); // you can change the number here
    const palette = colorMap ? colorMap.palette() : [];

    setColors(palette);
  };

  const buildRgb = (imageData: Uint8ClampedArray): RGB[] => {
    const pixels: RGB[] = [];

    for (let i = 0; i < imageData.length; i += 4) {
      const r = imageData[i];
      const g = imageData[i + 1];
      const b = imageData[i + 2];
      const a = imageData[i + 3];

      if (a > 0) {
        pixels.push([r, g, b]);
      }
    }

    return pixels;
  };

  return (
    <CardHeader
      className="relative aspect-[6/4] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(${colors[0].join(
          ","
        )}), rgba(${colors[0].join(",")},.4))`,
      }}
    >
      <span className="absolute backdrop-blur-xl inset-0"></span>

      <Link
        href={href || "#"}
        target="_blank"
        rel="nofollow"
        className={cn("flex flex-col h-full relative", className)}
      >
        <div className="p-4 sm:p-8 !pb-0 select-none">
          {image && (
            <Image
              src={image}
              alt={title}
              width={200}
              height={140}
              className="h-40 w-full overflow-hidden object-cover object-top"
              onLoad={handleImageLoad}
            />
          )}
        </div>
        <div className="bg-gradient-to-b from-transparent to-background flex-1 relative px-4 sm:px-8 flex items-center overflow-hidden">
          <CardTitle className="text-base truncate">{title}</CardTitle>
        </div>
      </Link>
    </CardHeader>
  );
};

export default ProjectImage;
