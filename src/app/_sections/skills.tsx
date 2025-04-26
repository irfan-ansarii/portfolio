"use client";
import React from "react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
const BLUR_FADE_DELAY = 0.05;

const SkillsSection = () => {
  return (
    <section id="skills" className="container">
      <div className="border-t border-x flex flex-col sm:flex-row items-stretch">
        <div className="p-4 sm:p-8 flex items-center justify-center border-b sm:border-0">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
        </div>
        {/*  */}
        <div className="grid grid-cols-3 sm:grid-cols-4 flex-1 text-center sm:border-l  [&>*:nth-child(3n)]:border-r-0 sm:[&>*:nth-child(3n)]:border-r sm:[&>*:nth-child(4n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0 sm:[&>*:nth-last-child(-n+4)]:border-b-0">
          {DATA.skills.map((skill, id) => (
            <BlurFade
              key={skill.name}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              className={`border-r border-b relative overflow-hidden`}
            >
              <Link
                href={skill.href || "#"}
                target="_blank"
                rel="nofollow"
                className="flex gap-2  items-center justify-center relative z-20 px-4 py-6 opacity-75 hover:opacity-100 transition-opacity duration-300"
              >
                <skill.icon className="size-4" style={{ color: skill.color }} />
                <span className="text-xs truncate">{skill.name}</span>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
