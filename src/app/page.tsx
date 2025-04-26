import IntroSection from "./_sections/intro";
import AboutSection from "./_sections/about";
import WorkSection from "./_sections/work";
import EducationSection from "./_sections/education";
import SkillsSection from "./_sections/skills";
import ProjectsSection from "./_sections/projects";
import BlurFade from "@/components/magicui/blur-fade";

export default function Page() {
  return (
    <BlurFade delay={0.2}>
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <WorkSection />
      <EducationSection />
    </BlurFade>
  );
}
