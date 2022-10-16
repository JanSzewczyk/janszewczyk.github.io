import { motion } from "framer-motion";
import ExperienceCard from "@components/ExperienceCard";
import { Experience } from "@types";

interface WorkExperienceSectionProps {
  experiences: Experience[];
}

function WorkExperienceSection({ experiences }: WorkExperienceSectionProps) {
  return (
    <section className="min-h-screen snap-start px-10 pt-24 pb-12" id="experience">
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="mb-24 mb-10 text-center text-2xl uppercase tracking-2 text-gray-500 md:tracking-8 ">
          Experience
        </h3>

        <div className="flex">
          <div className="mx-auto flex snap-x snap-mandatory flex-row gap-x-6 overflow-x-auto p-10">
            {experiences.map((experience) => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default WorkExperienceSection;
