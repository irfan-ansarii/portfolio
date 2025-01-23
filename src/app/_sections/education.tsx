import React from "react";
import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.05;
const EducationSection = () => {
  return (
    <section id="education" className="container">
      <div className="p-4 sm:p-8 border-x border-t">
        <div className="mb-6">
          <BlurFade yOffset={0} delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
        </div>
        <div className="flex min-h-0 flex-col gap-y-3">
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              yOffset={0}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                description={education.description}
                period={
                  education.start
                    ? `${education.start} - ${education.end}`
                    : undefined
                }
                expanded={true}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
