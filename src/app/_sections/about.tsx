import React from "react";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.05;
const AboutSection = () => {
  return (
    <section id="about" className="container">
      <div className="border-x border-t p-4 sm:p-8">
        <div className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
              About
            </h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose text-muted-foreground max-w-full text-pretty font-sans dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
