import React from "react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BLUR_FADE_DELAY = 0.05;
const IntroSection = () => {
  return (
    <section id="hero" className="container">
      <div className="mx-auto w-full space-y-8 border-x p-4 sm:p-8">
        <div className="gap-2 flex justify-between items-center">
          <div className="flex-col flex flex-1 gap-6">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={0}
              text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl text-muted-foreground"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY} yOffset={0}>
            <Avatar className="size-32 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
