import React from "react";
import Link from "next/link";
import { DATA } from "@/data/resume";

import BlurFade from "@/components/magicui/blur-fade";
import SectionHeading from "@/components/section-heading";

const BLUR_FADE_DELAY = 0.05;

const SkillsSection = () => {
  return (
    <section id="skills" className="container">
      <SectionHeading
        heading="Skills"
        subheading="I have worked with a variety of technologies and frameworks to
                create exceptional digital experiences."
        fadeDelay={BLUR_FADE_DELAY * 11}
      />

      <div className="border-t border-x">
        <div className="grid grid-cols-3 sm:grid-cols-5 flex-1 text-center [&>*:nth-child(3n)]:border-r-0 sm:[&>*:nth-child(3n)]:border-r sm:[&>*:nth-child(5n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0 sm:[&>*:nth-last-child(-n+5)]:border-b-0">
          {DATA.skills.map((skill, id) => (
            <BlurFade
              key={skill.name}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              className={`border-r border-b relative overflow-hidden aspect-square`}
            >
              <Link
                href={skill.href || "#"}
                target="_blank"
                rel="nofollow"
                className="flex flex-col size-full gap-4 items-center justify-center relative z-20 px-4 py-6 opacity-75 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="bg-secondary p-3 border rounded-full">
                  <skill.icon className="size-4" />
                </span>
                <span className="text-sm truncate font-medium">
                  {skill.name}
                </span>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
