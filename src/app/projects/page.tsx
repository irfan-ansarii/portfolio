import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import FlickeringGrid from "@/components/magicui/flickering-grid";

const BLUR_FADE_DELAY = 0.05;
const ProjectsPage = () => {
  return (
    <BlurFade delay={0.2}>
      <section id="work" className="container">
        <div className="relative mx-auto border-x overflow-hidden">
          <BlurFade delay={BLUR_FADE_DELAY * 11} className="p-4 sm:p-8">
            <h2 className="text-center text-muted-foreground text-sm text-balance font-semibold tracking-tigh uppercase mb-6">
              projects
            </h2>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full w-full bg-gradient-to-t from-background dark:from-background -z-10 from-50%"></div>
            <FlickeringGrid
              className="w-full h-full -z-20 absolute inset-0 size-full"
              color="rgb(38,38,38)"
            />
            <span className="absolute inset-0 backdrop-blur-3xl bg-background/60 -z-10"></span>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground prose">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>

        <div className="border-x overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 [&>*:nth-child(2n)]:border-r-0">
            {DATA.projects.map((project, id) => (
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
      </section>
    </BlurFade>
  );
};

export default ProjectsPage;
