import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import FlickeringGrid from "@/components/magicui/flickering-grid";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.1;

export default function Page() {
  return (
    <>
      <section id="hero" className="container">
        <div className="mx-auto w-full space-y-8 border-x p-4 sm:p-8">
          <div className="gap-2 flex justify-between items-center">
            <div className="flex-col flex flex-1 gap-6">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={0}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl text-muted-foreground"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} yOffset={0}>
              <Avatar className="size-32 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className="container">
        <div className="border-x border-t p-4 sm:p-8">
          <div className="space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 3} yOffset={0}>
              <h2 className="text-xl font-bold">About</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Markdown className="prose max-w-full text-pretty font-sans dark:prose-invert">
                {DATA.summary}
              </Markdown>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="work" className="container">
        <div className="p-4 sm:p-8 border-x border-t">
          <div className="mb-6">
            <BlurFade delay={BLUR_FADE_DELAY * 5} yOffset={0}>
              <h2 className="text-xl font-bold">Experience</h2>
            </BlurFade>
          </div>
          <div className="flex min-h-0 flex-col gap-y-3">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
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
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="education" className="container">
        <div className="p-4 sm:p-8 border-x border-t">
          <div className="mb-6">
            <BlurFade delay={BLUR_FADE_DELAY * 7} yOffset={0}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
          </div>
          <div className="flex min-h-0 flex-col gap-y-3">
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                  expanded={false}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="container">
        <div className="border-x border-t flex items-stretch">
          <div className="p-4 sm:p-8 border-r flex items-center">
            <h2 className="text-xl font-bold">Skills</h2>
          </div>

          <div className="grid grid-cols-5 flex-1 text-center">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                yOffset={0}
                className="border-r border-b p-4"
              >
                {skill}
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
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
          <BlurFade delay={BLUR_FADE_DELAY * 9} yOffset={0}>
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
          </BlurFade>
        </div>
        <div className="space-y-12 border-l overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                yOffset={0}
              >
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
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="container">
        <div className="border-x border-t overflow-hidden relative p-2 py-6 md:p-8">
          <h2 className="text-sm text-muted-foreground text-center mb-6 text-balance font-semibold tracking-tigh uppercase">
            contact
          </h2>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full w-full bg-gradient-to-t from-background dark:from-background -z-10 from-50%"></div>
          <FlickeringGrid
            className="w-full h-full -z-20 absolute inset-0 size-full"
            color="#262626"
          />
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full ">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me a dm{" "}
                  <Link
                    href={DATA.contact[0].url}
                    className="text-blue-500 hover:underline"
                  >
                    with a direct question on twitter
                  </Link>
                  and I&apos;ll respond whenever I can. I will ignore all
                  soliciting.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
        <div className="grid grid-cols-4 border-x border-t divide-x">
          {DATA.contact.map((con, idx) => (
            <div className="p-8 relative">
              <div className="flex justify-center">
                <con.icon className="size-20 text-muted-foreground opacity-10" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex justify-between">
                <span className="p-4 text-xs inline-flex">{con.name}</span>
                <span className="p-4">i</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="space" className="container">
        <div className="border-x h-20 border-t"></div>
      </section>
    </>
  );
}
