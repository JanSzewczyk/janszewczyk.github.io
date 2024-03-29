import { RefObject } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { urlFor } from "@lib/sanity.client";
import { Skill } from "@types";

interface SkillProps {
  rootRef?: RefObject<Element>;
  index?: number;
  skill: Skill;
}

export default function SkillItem({ index = 0, skill, rootRef }: SkillProps) {
  return (
    <motion.div
      initial={{
        x: 100,
        opacity: 0
      }}
      transition={{ duration: 0.5 + index * 0.5 }}
      whileInView={{ opacity: [0, 0, 0, 0, 0, 1], x: [100, 100, 100, 200, 200, 0] }}
      viewport={{ once: true, root: rootRef }}
      className="group relative flex h-20 w-20 cursor-pointer select-none sm:h-24 sm:w-24 md:h-28 md:w-28 xl:h-32 xl:w-32"
    >
      <div className="relative h-full w-full rounded-lg border border-gray-400 filter transition duration-300 ease-in-out group-hover:grayscale">
        <Image
          fill
          className="rounded-lg object-cover"
          src={urlFor(skill.image.img).url()}
          alt={skill.image.alt}
        />
      </div>

      <div className="absolute z-0 h-full w-full rounded-lg opacity-0 transition duration-300 ease-in-out group-hover:bg-gray-400 group-hover:opacity-90">
        <div className="flex h-full items-center justify-center">
          <p className="text-xl font-bold text-white opacity-100 md:text-3xl">{skill.progress}%</p>
        </div>
      </div>
    </motion.div>
  );
}
