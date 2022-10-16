import { motion } from "framer-motion";
import ExperienceCard from "@components/ExperienceCard";
import { Experience } from "@types";

interface WorkExperienceSectionProps {
  experiences: Experience[];
}

function WorkExperienceSection({ experiences }: WorkExperienceSectionProps) {
  const sortedExperiences = experiences.sort(
    (a, b) => new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime()
  );
  return (
    <section className="h-screen snap-start flex-col pt-16 md:pt-24" id="experience">
      <motion.div
        className="mx-auto flex h-full max-w-7xl flex-col overflow-hidden px-5 md:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="mb-10 text-center text-2xl uppercase tracking-2 text-gray-500 md:mb-24 md:tracking-8 ">
          Experience
        </h3>

        <div className="app-scroll flex flex-1 overflow-x-auto py-10">
          <div className=" mx-auto flex snap-x snap-mandatory flex-row gap-x-6  ">
            {sortedExperiences.map((experience) => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default WorkExperienceSection;
