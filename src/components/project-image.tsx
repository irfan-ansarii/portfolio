"use client";
import React, { useState } from "react";

import Link from "next/link";
import quantize from "quantize";
import { FastAverageColor } from "fast-average-color";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  title: string;
  href?: string;
  image?: string;
  className?: string;
}

const ProjectImage = ({ href, className, image, title }: Props) => {
  const [color, setColor] = useState({
    rgb: "rgb(233, 236, 239)",
    alpha: "233, 236, 239",
  });

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const fac = new FastAverageColor();
    const colors = fac.getColor(img, { algorithm: "simple" });

    colors.value.pop();

    setColor({ ...colors, alpha: colors.value.join(",") });
  };

  return (
    <CardHeader
      className="relative aspect-[6/4] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(${color.rgb}, rgba(${color.alpha},.5))`,
      }}
    >
      {/* <span className="absolute backdrop-blur-xl inset-0"></span> */}

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
