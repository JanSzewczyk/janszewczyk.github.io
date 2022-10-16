import { motion } from "framer-motion";
import { Skill } from "@types";
import SkillItem from "@components/SkillItem";
import React from "react";

interface SkillsSectionProps {
  skills: Skill[];
}

function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="flex min-h-screen snap-start pt-16 pb-12 md:pt-24" id="skills">
      <motion.div
        className="mx-auto max-w-7xl flex-col items-center overflow-hidden px-5 md:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="text-center text-2xl uppercase tracking-2 text-gray-500 md:tracking-8">
          Skills
        </h3>
        <h4 className="mt-4 text-center uppercase tracking-1 text-gray-500">
          Hover over a skill for currency proficiency
        </h4>

        <div className="mt-24">
          <div className="flex max-w-2xl flex-wrap items-center justify-center gap-8">
            {skills.map((skill, index) => (
              <SkillItem skill={skill} index={index} key={skill._id} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default SkillsSection;
