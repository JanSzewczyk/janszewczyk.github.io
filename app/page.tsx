import { fetchGlobalInfo, fetchPageInfo } from "@api";
import Footer from "@components/Footer";
import Header from "@components/Header";
import AboutSection from "@components/sections/AboutSection";
import ContactSection from "@components/sections/ContactSection";
import HeroSection from "@components/sections/HeroSection";
import ProjectsSection from "@components/sections/ProjectsSection";
import SkillsSection from "@components/sections/SkillsSection";
import WorkExperienceSection from "@components/sections/WorkExperienceSection";

export default async function Page() {
  const pageInfo = await fetchPageInfo();
  const globalInfo = await fetchGlobalInfo();

  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-auto scroll">
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
