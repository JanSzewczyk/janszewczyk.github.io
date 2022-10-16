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
    <article className="flex cursor-pointer snap-center flex-col items-center bg-[#292929] p-4 opacity-60 transition-opacity duration-200 hover:opacity-100 sm:w-96 md:p-10">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mb-7 h-32 w-32 rounded-full object-cover object-center"
        src={urlFor(experience.companyImage).url()}
      />

      <div className="w-full">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="mt-1 text-2xl font-bold">{experience.company}</p>
        <div className="my-2 flex gap-x-2">
          {experience.technologies.map((tech) => (
            <img
              key={tech._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(tech.image).url()}
              alt=""
            />
          ))}
        </div>

        <p className="py-5 uppercase text-gray-500">
          {formatDate(experience.dateStarted)} -{" "}
          {!experience.isCurrentlyWorkingHere && experience.dateEnded
            ? formatDate(experience.dateEnded)
            : "Present"}
        </p>
        <ul className="ml-5 list-disc space-y-4 text-lg ">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
