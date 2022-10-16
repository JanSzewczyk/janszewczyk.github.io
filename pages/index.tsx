import type { GetStaticProps } from "next";
import Head from "next/head";
import Header from "@components/Header";
import HeroSection from "@components/sections/HeroSection";
import AboutSection from "@components/sections/AboutSection";
import WorkExperienceSection from "@components/sections/WorkExperienceSection";
import SkillsSection from "@components/sections/SkillsSection";
import ProjectsSection from "@components/sections/ProjectsSection";
import ContactSection from "@components/sections/ContactSection";
import { Experience, PageInfo, Project, Skill, Social } from "@types";
import { fetchExperiences, fetchPageInfo, fetchProjects, fetchSkills, fetchSocials } from "@api";

interface HomeProps {
  experiences: Experience[];
  pageInfo: PageInfo;
  projects: Project[];
  skills: Skill[];
  socials: Social[];
}

function Home({ experiences, pageInfo, projects, skills, socials }: HomeProps) {
  return (
    <div className="app-scroll app-scroll z-0 h-screen snap-y snap-mandatory bg-[rgb(36,36,36)] text-white">
      <Head>
        <title>Jan Szewczyk`s portfolio</title>
      </Head>

      <Header socials={socials} />

      <HeroSection pageInfo={pageInfo} />
      <AboutSection pageInfo={pageInfo} />
      <WorkExperienceSection experiences={experiences} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />

      <ContactSection />
    </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const experiences = await fetchExperiences();
  const pageInfo = await fetchPageInfo();
  const projects = await fetchProjects();
  const skills = await fetchSkills();
  const socials = await fetchSocials();

  return {
    props: {
      experiences,
      pageInfo,
      projects,
      skills,
      socials
    }
  };
};
