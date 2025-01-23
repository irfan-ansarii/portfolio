import IntroSection from "./_sections/intro";
import AboutSection from "./_sections/about";
import WorkSection from "./_sections/work";
import EducationSection from "./_sections/education";
import SkillsSection from "./_sections/skills";
import ProjectsSection from "./_sections/projects";
import ContactSection from "./_sections/contact";
import BlurFade from "@/components/magicui/blur-fade";

export default function Page() {
  return (
    <BlurFade yOffset={0} delay={0.2}>
      <IntroSection />
      <AboutSection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      {/* empty space */}
      <section id="space" className="container">
        <div className="border-x h-20 border-t flex items-center justify-between px-4 md:px-8">
          <span className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} - Irfan Ansari
          </span>
          <span className="text-xs text-muted-foreground">
            Buil with{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="text-primary"
            >
              Next.js
            </a>
          </span>
        </div>
      </section>
    </BlurFade>
  );
}
