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
    <section className="h-screen snap-start pt-24" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative flex h-full flex-col"
      >
        <SectionTitle title="Skills" />

        <div className="app-scroll relative z-20 flex w-full flex-1 snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
          {projects.map((project, index) => (
            <div
              className="msx-h-full flex w-screen flex-shrink-0 snap-center flex-col items-center justify-center gap-5 p-20 md:p-24"
              key={project._id}
            >
              <motion.img
                initial={{ opacity: 0, y: -300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="w-full max-w-xl"
                src={urlFor(project.image).url()}
              />

              <div className="flex max-w-3xl flex-col space-y-10 overflow-x-auto px-0 md:px-10">
                <h4 className="text-center text-4xl font-semibold">
                  <span className="underline decoration-[#f7ab0a]/50">
                    Case Study {index + 1} of {projects.length}:
                  </span>{" "}
                  {project.title}
                </h4>

                <div className="app-scroll overflow-x-auto text-center md:text-left md:text-lg">
                  <p>{project.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-[20%] h-[500px] w-full -skew-y-12 bg-[#f7ab0a]/10" />
      </motion.div>
    </section>
  );
}

export default ProjectsSection;
