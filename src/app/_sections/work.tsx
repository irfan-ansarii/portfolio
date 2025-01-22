import React from "react";
import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";

const WorkSection = () => {
  return (
    <section id="work" className="container">
      <div className="p-4 sm:p-8 border-x border-t">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Experience</h2>
        </div>
        <div className="flex min-h-0 flex-col gap-y-3">
          {DATA.work.map((work, id) => (
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
              expanded={id === 0 && true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
