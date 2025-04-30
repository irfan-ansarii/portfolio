import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { DATA } from "@/data/resume";
import { ProjectCard } from "@/components/project-card";
import BlurFade from "@/components/magicui/blur-fade";
import SectionHeading from "@/components/section-heading";

const BLUR_FADE_DELAY = 0.05;
const ProjectsSection = () => {
  return (
    <section id="projects" className="container">
      <SectionHeading
        badge="projects"
        heading="Check out my latest work"
        subheading="I have worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites."
        fadeDelay={BLUR_FADE_DELAY * 11}
      />
      <div className="space-y-12 border-x overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 [&>*:nth-child(2n)]:border-r-0">
          {DATA.projects.slice(0, 4).map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="border-r border-t"
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.technologies}
                image={project.image}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
      <div className="space-y-12 border-x overflow-hidden border-t">
        <Link
          href="/projects"
          className="flex justify-center items-center py-3 h-11 group text-xs"
        >
          <span className="relative">
            All Projects
            <ArrowUpRight className="size-4 opacity-0  transition-all absolute left-full top-1/2 transform -translate-y-1/2 group-hover:opacity-100 group-hover:translate-x-2" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
