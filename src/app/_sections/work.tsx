import React from "react";
import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.05;
const WorkSection = () => {
  return (
    <section id="work" className="container">
      <div className="p-4 sm:p-8 border-x border-t">
        <div className="mb-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
        </div>
        <div className="flex min-h-0 flex-col gap-y-3">
          {DATA.work.map((work, id) => (
            <BlurFade
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              key={work.company}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                expanded={id === 0 && true}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
