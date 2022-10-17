import { motion } from "framer-motion";
import { Project } from "@types";
import { urlFor } from "../../sanity";
import SectionTitle from "@components/SectionTitle";
import React from "react";

interface ProjectsSectionProps {
  projects: Project[];
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      className="relative flex h-screen snap-start overflow-x-auto pt-16 md:pt-24"
      id="projects"
    >
      {/*<div className="absolute left-0 top-[20%] h-[500px] w-full -skew-y-12 bg-primary/10" />*/}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mx-auto flex h-full max-w-7xl flex-col overflow-x-auto px-5 md:px-10"
      >
        <SectionTitle title="Skills" />

        <div className="app-scroll flex flex-1 flex-row gap-x-10 overflow-x-auto py-10">
          {/*<div className="mx-auto flex snap-x snap-mandatory flex-row gap-x-6  ">*/}
          {[...projects, ...projects].map((project, index) => (
            <div
              // className="flex max-h-full w-screen flex-shrink-0 snap-center flex-col items-center justify-center gap-5 p-10 md:p-20"
              className="flex max-w-[800px] flex-1"
              key={project._id}
            >
              asdfasd fasdf asd fs asd fasdfas dfas dfasdfas dfas df asdf asdf asdf sadf asdfs dfas
              dfas dfasdfas dfa sdf as dasd fas
              {/*<motion.img*/} asd
              {/*  initial={{ opacity: 0, y: -300 }}*/}
              {/*  whileInView={{ opacity: 1, y: 0 }}*/}
              {/*  transition={{ duration: 1.2 }}*/}
              {/*  viewport={{ once: true }}*/}
              {/*  className="w-full max-w-xl"*/}
              {/*  src={urlFor(project.image).url()}*/}
              {/*/>*/}
              {/*<div className="flex max-w-3xl flex-col space-y-10 overflow-x-auto px-0 md:px-10">*/}
              {/*  <h4 className="text-center text-4xl font-semibold">*/}
              {/*    <span className="underline decoration-[#f7ab0a]/50">*/}
              {/*      Case Study {index + 1} of {projects.length}:*/}
              {/*    </span>{" "}*/}
              {/*    {project.title}*/}
              {/*  </h4>*/}
              {/*  <div className="app-scroll overflow-x-auto text-center md:text-left md:text-lg">*/}
              {/*    <p>{project.summary}</p>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          ))}
          {/*</div>*/}
        </div>
      </motion.div>
    </section>
  );
}

export default ProjectsSection;

// Copyright 2022 Szum-Tech, Inc. All rights reserved. -> v1.2.3
