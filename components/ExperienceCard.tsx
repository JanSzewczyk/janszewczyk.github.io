import { motion } from "framer-motion";
import { Experience } from "@types";
import { urlFor } from "../sanity";

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  function formatDate(date: string): string {
    return new Date(date).toLocaleString("en-US", {
      timeZone: "UTC",
      month: "short",
      year: "numeric"
    });
  }

  return (
    <article className="flex w-[calc(100vw-3rem)] cursor-pointer snap-center flex-col items-center overflow-y-auto rounded bg-white dark:bg-gray-800 p-4 transition-opacity duration-200 hover:opacity-100 sm:w-128 md:p-6 md:opacity-80 lg:p-10 lg:pb-6">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mb-7 h-32 w-32 rounded object-cover object-center"
        src={urlFor(experience.companyLogo.img).url()}
        alt={experience.companyLogo.alt}
      />

      <div className="flex w-full flex-col overflow-y-auto">
        <h3 className="text-center text-3xl font-light md:text-4xl">{experience.jobTitle}</h3>
        <p className="mt-1 text-center text-xl font-bold md:text-2xl">{experience.company}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {experience.technologies.map((tech) => (
            <img
              key={tech._id}
              className="h-8 w-8 md:h-10 md:w-10"
              src={urlFor(tech.image.img).width(255).height(255).url()}
              alt={tech.image.alt}
            />
          ))}
        </div>

        <p className="py-4 font-semibold uppercase text-gray-100">
          {formatDate(experience.dateStarted)} -{" "}
          {!experience.isCurrentlyWorkingHere && experience.dateEnded
            ? formatDate(experience.dateEnded)
            : "Present"}
        </p>
        <div className="app-scroll overflow-y-auto">
          <ul className="ml-5 list-disc space-y-2 text-lg">
            {experience.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
