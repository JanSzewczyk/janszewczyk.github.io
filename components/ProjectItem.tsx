import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import React from "react";
import { Project } from "@types";
import PortableText from "@components/PortableText";
import { SocialIcon } from "react-social-icons";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

interface ProjectItemProps {
  index?: number;
  project: Project;
  projectsAmount?: number;
}

function ProjectItem({ index = 0, project, projectsAmount = 1 }: ProjectItemProps) {
  return (
    <div className="project-item-width flex w-[calc(100vw-3rem)] flex-1 snap-center flex-col items-center md:w-[calc(100vw-5.5rem)] xl:w-300">
      <motion.img
        initial={{ opacity: 0, y: -150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mb-4 w-full max-w-md px-4 md:mb-8"
        src={urlFor(project.image.img).url()}
        alt={project.image.alt}
      />
      <div className="flex max-w-3xl flex-col overflow-y-auto">
        <h3 className="text-primary px-2 text-center text-3xl font-semibold md:text-4xl">
          <span>{project.title.trim()}</span>
          <SocialIcon
            aria-label={project.title}
            bgColor="transparent"
            className="ml-2 !h-10 !w-10"
            fgColor="rgb(var(--text-color))"
            key={project._id}
            target="_blank"
            url={project.linkToRepository}
          />
        </h3>
        <p className="text-center text-lg text-typography-disabled md:text-xl">
          {index + 1} of {projectsAmount}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech) => (
            <img
              key={tech._id}
              className="h-8 w-8 rounded-sm md:h-10 md:w-10"
              src={urlFor(tech.image.img).width(255).height(255).url()}
              alt={tech.image.alt}
            />
          ))}
        </div>

        <div className="app-scroll mt-4 overflow-y-auto px-4 md:mt-6">
          <div className="text-center md:text-left md:text-lg">
            <PortableText value={project.summary} />
          </div>
        </div>

        {project.linkToBuild ? (
          <div className="mt-4 flex justify-end overflow-hidden md:mt-8">
            <motion.a
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              href={project.linkToBuild}
              target="_blank"
              className="flex flex-row items-center font-bold hover:text-primary-500 md:text-lg"
            >
              Let&apos;s check the demo <RocketLaunchIcon className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectItem;
