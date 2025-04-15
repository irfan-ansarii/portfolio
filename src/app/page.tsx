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
    <BlurFade delay={0.2}>
      <IntroSection />
      <AboutSection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </BlurFade>
  );
}
