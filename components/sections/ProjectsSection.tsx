"use client";

import React from "react";

import { motion } from "framer-motion";

import ProjectItem from "@components/ProjectItem";
import SectionTitle from "@components/SectionTitle";
import { Project } from "@types";

interface ProjectsSectionProps {
  projects: Project[];
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="relative flex h-screen snap-start pt-16 md:pt-24" id="projects">
      <div className="absolute left-0 top-[20%] z-0 h-1/2 w-full -skew-y-12 bg-primary-500/10" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="z-10 mx-auto flex h-full max-w-7xl flex-1 flex-col overflow-x-auto px-5 md:px-10"
      >
        <SectionTitle title="Projects" />

        <div className="scroll flex flex-1 snap-x snap-proximity overflow-x-auto pb-5 md:pb-10">
          <div className="mx-auto flex flex-row gap-x-6">
            {projects.map((project, index) => (
              <ProjectItem
                index={index}
                key={project._id}
                project={project}
                projectsAmount={projects.length}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ProjectsSection;
