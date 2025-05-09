"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string | undefined;
  description?: string;
  expanded: boolean;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  expanded,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(expanded);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      target="_blank"
      className="block"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              asChild
              src={logoUrl}
              alt={altText}
              className="object-contain"
            >
              <Image src={logoUrl} alt={altText} width={50} height={50} />
            </AvatarImage>
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 transform transition-all duration-300 ease-out group-hover:translate-x-1 opacity-0 group-hover:opacity-100",
                    isExpanded
                      ? "rotate-90 translate-x-1 opacity-100"
                      : "rotate-0"
                  )}
                />
              </h3>
              {period && (
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {period}
                </div>
              )}
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0, visibility: "hidden" }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
                visibility: isExpanded ? "visible" : "hidden",
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt text-xs sm:text-sm"
            >
              <Markdown className="prose max-w-full text-pretty  text-sm text-muted-foreground dark:prose-invert">
                {description}
              </Markdown>
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
