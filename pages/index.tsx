import type { GetStaticProps } from "next";
import Head from "next/head";
import Header from "@components/Header";
import HeroSection from "@components/sections/HeroSection";
import AboutSection from "@components/sections/AboutSection";
import WorkExperienceSection from "@components/sections/WorkExperienceSection";
import SkillsSection from "@components/sections/SkillsSection";
import ProjectsSection from "@components/sections/ProjectsSection";
import ContactSection from "@components/sections/ContactSection";
import { GlobalInfo, PageInfo } from "@types";
import { fetchGlobalInfo, fetchPageInfo } from "@api";
import Footer from "@components/Footer";

interface HomeProps {
  globalInfo: GlobalInfo;
  pageInfo: PageInfo;
}

function Home({ pageInfo, globalInfo }: HomeProps) {
  return (
    <main className="scroll z-0 h-screen snap-y snap-mandatory overflow-y-auto">
      <Head>
        <title>Jan Szewczyk`s portfolio</title>
      </Head>

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

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const pageInfo = await fetchPageInfo();
  const globalInfo = await fetchGlobalInfo();

  return {
    props: {
      pageInfo,
      globalInfo
    }
  };
};
