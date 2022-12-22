import { motion } from "framer-motion";
import { Experience } from "@types";
import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/sanity.client";

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
    <article className="flex w-[calc(100vw-3rem)] cursor-pointer snap-center flex-col items-center overflow-y-auto rounded bg-white p-4 transition-opacity duration-200 hover:opacity-100 dark:bg-gray-800 sm:w-128 md:p-6 md:opacity-80 lg:p-10 lg:pb-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative mb-7 h-32 w-32"
      >
        <Image
          src={urlFor(experience.companyLogo.img).url()}
          alt={experience.companyLogo.alt}
          className="rounded object-cover object-center"
          fill
        />
      </motion.div>

      <div className="flex w-full flex-col overflow-y-auto">
        <h3 className="text-center text-3xl font-light md:text-4xl">{experience.jobTitle}</h3>
        <p className="mt-1 text-center text-xl font-bold md:text-2xl">{experience.company}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {experience.technologies.map((tech) => (
            <div key={tech._id} className="relative h-8 w-8 md:h-10 md:w-10">
              <Image
                className="rounded-sm"
                src={urlFor(tech.image.img).width(255).height(255).url()}
                alt={tech.image.alt}
                fill
              />
            </div>
          ))}
        </div>

        <p className="py-4 font-semibold uppercase text-gray-100">
          {formatDate(experience.dateStarted)} -{" "}
          {!experience.isCurrentlyWorkingHere && experience.dateEnded
            ? formatDate(experience.dateEnded)
            : "Present"}
        </p>
        <div className="scroll overflow-y-auto">
          <ul className="text-lg ml-5 list-disc space-y-2">
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
