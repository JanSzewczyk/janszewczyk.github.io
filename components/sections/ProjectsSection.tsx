import { motion } from "framer-motion";
import { Project } from "@types";
import SectionTitle from "@components/SectionTitle";
import React from "react";
import ProjectItem from "@components/ProjectItem";

interface ProjectsSectionProps {
  projects: Project[];
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      className="relative flex h-screen snap-start overflow-x-auto pt-16 md:pt-24"
      id="projects"
    >
      <div className="absolute left-0 top-[20%] z-0 h-[500px] w-full -skew-y-12 bg-primary/10" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="z-20 mx-auto flex h-full max-w-7xl flex-1 flex-col overflow-x-auto px-5 md:px-10"
      >
        <SectionTitle title="Projects" />

        <div className="app-scroll flex flex-1 snap-x snap-proximity overflow-x-auto pb-5 md:pb-10">
          <div className="mx-auto flex flex-row gap-x-6">
            {projects.map((project) => (
              <ProjectItem key={project._id} project={project} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ProjectsSection;

// Copyright 2022 Szum-Tech, Inc. All rights reserved. -> v1.2.3
