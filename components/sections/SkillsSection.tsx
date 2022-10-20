import { motion } from "framer-motion";
import { Skill } from "@types";
import SkillItem from "@components/SkillItem";
import React from "react";
import SectionTitle from "@components/SectionTitle";

interface SkillsSectionProps {
  skills: Skill[];
}

function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="flex min-h-screen snap-start pt-16 pb-24 md:pb-12 md:pt-24" id="skills">
      <motion.div
        className="mx-auto max-w-7xl flex-col items-center overflow-hidden px-5 md:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SectionTitle subTitle="Hover over a skill for currency proficiency" title="Skills" />

        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-8">
          {skills.map((skill, index) => (
            <SkillItem skill={skill} index={index} key={skill._id} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SkillsSection;
