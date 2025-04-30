import React from "react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import SectionHeading from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";

const BLUR_FADE_DELAY = 0.05;
const ProjectsPage = () => {
  return (
    <BlurFade delay={0.2}>
      <section id="work" className="container">
        <SectionHeading
          badge="projects"
          heading="Check out my latest work"
          subheading="I have worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites."
          fadeDelay={BLUR_FADE_DELAY * 11}
          className="border-t-0"
        />
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
