import { motion } from "framer-motion";
import { Skill } from "@types";
import { urlFor } from "../sanity";
import { RefObject } from "react";

interface SkillProps {
  rootRef?: RefObject<Element>;
  index?: number;
  skill: Skill;
}

function SkillItem({ index = 0, skill, rootRef }: SkillProps) {
  return (
    <motion.div
      initial={{
        x: 100,
        opacity: 0
      }}
      transition={{ duration: 1 + index * 1 }}
      whileInView={{ opacity: [0, 0, 0, 0, 0, 1], x: [100, 100, 100, 200, 200, 0] }}
      viewport={{ once: true, root: rootRef }}
      className="group relative flex cursor-pointer"
    >
      <img
        className="h-24 w-24 rounded-lg border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
        src={urlFor(skill.image).url()}
        alt=""
      />
      <div className="absolute z-0 h-24 w-24 rounded-lg opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32">
        <div className="flex h-full items-center justify-center">
          <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillItem;
