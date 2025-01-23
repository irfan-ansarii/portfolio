import React from "react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.05;
const SkillsSection = () => {
  return (
    <section id="skills" className="container">
      <div className="border-t border-x flex flex-col sm:flex-row items-stretch">
        <div className="p-4 sm:p-8 flex items-center justify-center border-b sm:border-0">
          <BlurFade yOffset={0} delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
        </div>
        {/*  */}
        <div className="grid grid-cols-3 sm:grid-cols-4 flex-1 text-center sm:border-l  [&>*:nth-child(3n)]:border-r-0 sm:[&>*:nth-child(3n)]:border-r sm:[&>*:nth-child(4n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0 sm:[&>*:nth-last-child(-n+4)]:border-b-0">
          {DATA.skills.map((skill, id) => (
            <BlurFade
              key={skill.name}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              yOffset={0}
              className="border-r border-b"
            >
              <div className="flex gap-2 items-center justify-center opacity-40 hover:opacity-100 px-4 py-6 transition-opacity">
                <skill.icon className="size-4" />
                <span className="text-xs truncate">{skill.name}</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
