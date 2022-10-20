import { motion } from "framer-motion";
import ExperienceCard from "@components/ExperienceCard";
import { Experience } from "@types";
import SectionTitle from "@components/SectionTitle";

interface WorkExperienceSectionProps {
  experiences: Experience[];
}

function WorkExperienceSection({ experiences }: WorkExperienceSectionProps) {
  const sortedExperiences = experiences.sort(
    (a, b) => new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime()
  );

  return (
    <section className="mb-2 h-screen snap-start flex-col pt-16 md:pt-24" id="experience">
      <motion.div
        className="mx-auto flex h-full max-w-7xl flex-col overflow-hidden px-5 md:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SectionTitle title="Experience" />

        <div className="app-scroll flex flex-1 snap-x snap-mandatory overflow-x-auto pb-5 md:snap-proximity md:pb-10 lg:py-10">
          <div className="mx-auto flex flex-row gap-x-6">
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
