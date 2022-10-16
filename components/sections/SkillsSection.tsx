import { motion } from "framer-motion";
import { Skill } from "@types";
import SkillItem from "@components/SkillItem";

interface SkillsSectionProps {
  skills: Skill[];
}

function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="min-h-screen snap-start px-10 pt-24 pb-12" id="skills">
      <motion.div
        className="flex h-full flex-col items-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="text-center text-2xl uppercase tracking-2 text-gray-500 md:tracking-8">
          Skills
        </h3>
        <h4 className="mt-4 text-center uppercase tracking-1 text-gray-500">
          Hover over a skill for currency profieciency
        </h4>

        {/* TODO flex row wrap */}
        <div className="mt-24 flex flex-1 items-center">
          <div className="grid grid-cols-4 gap-5">
            {skills.map((skill) => (
              <SkillItem skill={skill} key={skill._id} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default SkillsSection;
