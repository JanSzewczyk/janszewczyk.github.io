import { motion } from "framer-motion";
import React from "react";
import { Project } from "@types";
import PortableText from "@components/PortableText";
import { SocialIcon } from "react-social-icons";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { urlFor } from "@lib/sanity.client";

interface ProjectItemProps {
  index?: number;
  project: Project;
  projectsAmount?: number;
}

function ProjectItem({ index = 0, project, projectsAmount = 1 }: ProjectItemProps) {
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

        <div className="scroll mt-4 overflow-y-auto px-4 md:mt-6">
          <div className="typography-body-2 text-center md:typography-body-1 md:text-left">
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
              className="typography-button flex flex-row items-center hover:text-primary-500"
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
