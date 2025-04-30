"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { DATA } from "@/data/resume";

import BlurFade from "@/components/magicui/blur-fade";
import SectionHeading from "@/components/section-heading";

const BLUR_FADE_DELAY = 0.05;

const filter = [
  {
    label: "All",
    value: "",
  },
  {
    label: "Frontend",
    value: "frontend",
  },
  {
    label: "Backend",
    value: "backend",
  },
  {
    label: "Database/ORM",
    value: "database",
  },
  {
    label: "CMS",
    value: "cms",
  },
];
const SkillsSection = () => {
  const [active, setActive] = useState("");

  const handleFilter = (key: string) => {
    setActive(key);
  };

  return (
    <section id="skills" className="container">
      <SectionHeading
        heading="Skills"
        subheading="I have worked with a variety of technologies and frameworks to
                create exceptional digital experiences."
        fadeDelay={BLUR_FADE_DELAY * 11}
      />

      <div className="border-t border-x p-2">
        <div className="flex justify-between gap-2 overflow-auto">
          {filter.map((f, index) => (
            <div
              key={index}
              onClick={() => handleFilter(f.value)}
              className={`underline-offset-2 border p-2 cursor-pointer  text-sm text-center flex-[1_1_0]
                ${active === f.value ? "underline" : "hover:underline text-muted-foreground"}
                `}
            >
              {f.label}
            </div>
          ))}
        </div>
      </div>
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
                className={`flex flex-col size-full gap-4 items-center justify-center relative z-20 px-4 py-6 transition-opacity duration-300
                  ${active === "" ? "opacity-75 hover:opacity-100" : skill.tags.includes(active as never) && active !== "" ? "opacity-75" : "opacity-10"}
                  `}
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
