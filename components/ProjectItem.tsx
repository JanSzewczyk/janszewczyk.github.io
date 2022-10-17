import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import React from "react";
import { Project } from "@types";

interface ProjectItemProps {
  project: Project;
}

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="project-item-width flex flex-1 snap-center flex-col items-center">
      <motion.img
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mb-8 w-full max-w-md"
        src={urlFor(project.image).url()}
      />
      <div className="flex max-w-3xl flex-col overflow-x-auto">
        <h4 className="px-2 text-center text-4xl font-semibold">{project.title}</h4>
        <div className="app-scroll mt-5 overflow-x-auto px-5 text-center md:text-left md:text-lg">
          <p>{project.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
