import React from "react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.13;
const SkillsSection = () => {
  return (
    <section id="skills" className="container">
      <div className="border-t flex flex-col items-stretch">
        <div className="p-4 sm:p-8 border-x flex items-center border-b justify-center">
          <h2 className="text-xl font-bold">Skills</h2>
        </div>

        <div className="grid grid-cols-4 flex-1 text-center border-x">
          {DATA.skills.map((skill, id) => (
            <BlurFade
              key={id}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              yOffset={0}
              className="border-r border-b"
            >
              <div className="flex gap-2 items-center justify-center opacity-40 hover:opacity-100 px-4 py-6 transition-opacity">
                <skill.icon className="size-4" />
                <span className="text-xs">{skill.name}</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
