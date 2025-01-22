import React from "react";
import { DATA } from "@/data/resume";
import { ProjectCard } from "@/components/project-card";
import FlickeringGrid from "@/components/magicui/flickering-grid";

const ProjectsSection = () => {
  return (
    <section id="projects" className="container">
      <div className="relative mx-auto border-x border-t overflow-hidden p-4 sm:p-8">
        <h2 className="text-center text-muted-foreground text-sm text-balance font-semibold tracking-tigh uppercase mb-6">
          projects
        </h2>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full w-full bg-gradient-to-t from-background dark:from-background -z-10 from-50%"></div>
        <FlickeringGrid
          className="w-full h-full -z-20 absolute inset-0 size-full"
          color="rgb(38,38,38)"
        />
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-12 border-l overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
