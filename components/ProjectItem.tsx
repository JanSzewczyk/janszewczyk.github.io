import { motion } from "framer-motion";
import React from "react";
import { Project } from "@types";
import PortableText from "@components/PortableText";
import Image from "next/image";
import { urlFor } from "@lib/sanity.client";
import ProjectLinkItem from "@components/ProjectLinkItem";

interface ProjectItemProps {
  index?: number;
  project: Project;
  projectsAmount?: number;
}

function ProjectItem({ index = 0, project, projectsAmount = 1 }: ProjectItemProps) {
  console.log(project);
  return (
    <div className="project-item-width flex w-[calc(100vw-3rem)] flex-1 snap-center flex-col items-center md:w-[calc(100vw-5.5rem)] xl:w-300">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mb-4 w-full max-w-md px-8 md:mb-8"
        src={urlFor(project.image.img).url()}
        alt={project.image.alt}
      />
      <div className="flex max-w-3xl flex-col overflow-y-auto">
        <h3 className=" typography-heading-4 px-2 text-center md:typography-heading-3">
          {project.title.trim()}
        </h3>
        <p className="typography-subtitle-1 text-center text-typography-disabled md:typography-heading-6">
          {index + 1} of {projectsAmount}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech) => (
            <div key={tech._id} className="relative h-8 w-8 md:h-10 md:w-10">
              <Image
                className="rounded-sm"
                src={urlFor(tech.image.img).width(255).height(255).url()}
                alt={tech.image.alt}
                fill
              />
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-4 overflow-y-auto md:mt-6 md:flex-row">
          <div className="scroll overflow-y-auto px-2 md:px-4">
            <div className="typography-body-2 text-center md:typography-body-1 md:text-left">
              <PortableText value={project.summary} />
            </div>
          </div>

          {project.links?.length ? (
            <div className="flex flex-row justify-around gap-4 md:flex-col md:justify-start">
              {project.links.map((link) => (
                <ProjectLinkItem projectLink={link} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
