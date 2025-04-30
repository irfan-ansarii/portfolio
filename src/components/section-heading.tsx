import React from "react";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";

interface Props {
  badge?: string;
  heading: string;
  subheading: string;
  fadeDelay: number;
  className?: string;
}
const SectionHeading = ({
  badge,
  heading,
  subheading,
  fadeDelay,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        "relative mx-auto border-x border-t overflow-hidden",
        className
      )}
    >
      <BlurFade delay={fadeDelay} className="p-4 sm:p-8">
        {badge && (
          <h2 className="text-center text-muted-foreground text-sm text-balance font-semibold tracking-tigh uppercase mb-4 sm:mb-6">
            {badge}
          </h2>
        )}
        <DotPattern className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] -z-20 absolute inset-0 size-full" />
        <span className="absolute inset-0 backdrop-blur-3xl bg-background/60 -z-10"></span>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
              {heading}
            </h2>
            <p className="text-muted-foreground prose">{subheading}</p>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default SectionHeading;
