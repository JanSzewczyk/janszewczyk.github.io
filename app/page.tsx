import { fetchGlobalInfo, fetchPageInfo } from "@api";
import Header from "@components/Header";
import HeroSection from "@components/sections/HeroSection";
import AboutSection from "@components/sections/AboutSection";
import WorkExperienceSection from "@components/sections/WorkExperienceSection";
import SkillsSection from "@components/sections/SkillsSection";
import ProjectsSection from "@components/sections/ProjectsSection";
import ContactSection from "@components/sections/ContactSection";
import Footer from "@components/Footer";

export default async function Page() {
  const pageInfo = await fetchPageInfo();
  const globalInfo = await fetchGlobalInfo();

  return (
    <main className="scroll h-screen snap-y snap-mandatory overflow-y-auto">
      <Header headerInfo={globalInfo.header} />

      <HeroSection heroInfo={pageInfo.heroSection} />
      <AboutSection aboutInfo={pageInfo.aboutSection} />
      <WorkExperienceSection experiences={pageInfo.experiences} />
      <SkillsSection skills={pageInfo.skills} />
      <ProjectsSection projects={pageInfo.projects} />
      <ContactSection contactInfo={pageInfo.contactSection} />
      <div className={"snap-start"}>
        <Footer footerInfo={globalInfo.footer} />
      </div>
    </main>
  );
}
