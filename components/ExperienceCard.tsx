import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { urlFor } from "@lib/sanity.client";
import { Experience } from "@types";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  function formatDate(date: string): string {
    return new Date(date).toLocaleString("en-US", {
      timeZone: "UTC",
      month: "short",
      year: "numeric"
    });
  }

  return (
    <article className="flex w-[calc(100vw-3rem)] snap-center flex-col items-center overflow-y-auto rounded bg-app-primary p-4 transition-opacity duration-200 hover:opacity-100 sm:w-128 md:p-6 md:opacity-80 lg:p-10 lg:pb-6">
      <div className="mb-6">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative h-32 w-32"
        >
          <Image
            src={urlFor(experience.companyLogo.img).url()}
            alt={experience.companyLogo.alt}
            className="rounded object-cover object-center"
            fill
          />
        </motion.div>
      </div>

      <div className="flex w-full flex-col overflow-y-auto">
        <h3 className="text-center typography-heading-5 md:typography-heading-4">
          {experience.jobTitle}
        </h3>
        <p className="mt-1 text-center !font-bold text-gray-200 typography-subtitle-2 md:typography-subtitle-1">
          {experience.company}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {experience.technologies.map((tech) => (
            <div key={tech._id} className="relative h-8 w-8 md:h-10 md:w-10">
              <Image
                className="rounded-sm"
                src={urlFor(tech.image.img).width(200).height(200).url()}
                alt={tech.image.alt}
                fill
              />
            </div>
          ))}
        </div>

        <p className="py-4 uppercase text-gray-300 typography-subtitle-1">
          {formatDate(experience.dateStarted)} -{" "}
          {!experience.isCurrentlyWorkingHere && experience.dateEnded
            ? formatDate(experience.dateEnded)
            : "Present"}
        </p>
        <div className="overflow-y-auto scroll">
          <ul className="ml-5 list-disc space-y-2 typography-body-2 md:typography-body-1">
            {experience.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
