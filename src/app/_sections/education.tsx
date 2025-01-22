import React from "react";
import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";

const EducationSection = () => {
  return (
    <section id="education" className="container">
      <div className="p-4 sm:p-8 border-x border-t">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Education</h2>
        </div>
        <div className="flex min-h-0 flex-col gap-y-3">
          {DATA.education.map((education, id) => (
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              description={education.description}
              period={`${education.start} - ${education.end}`}
              expanded={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
