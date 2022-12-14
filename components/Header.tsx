"use client";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { HeaderInfo } from "@types";

interface HeaderProps {
  headerInfo: HeaderInfo;
}

export default function Header({ headerInfo }: HeaderProps) {
  return (
    <header className="lg: sticky top-0 z-20 mx-auto flex max-w-7xl items-center justify-between overflow-hidden bg-gray-900/80 px-4 pt-2 lg:bg-gray-900/0">
      <motion.div
        initial={{
          y: -300,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center"
      >
        {headerInfo.socials.map((social) => (
          <SocialIcon
            aria-label={social.title}
            bgColor="transparent"
            fgColor="rgb(var(--gray-300))"
            key={social._id}
            target="_blank"
            url={social.url}
          />
        ))}
      </motion.div>

      <a href="#contact" aria-label="Link To Contact">
        <motion.div
          initial={{
            y: -300,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
          className="flex cursor-pointer select-none flex-row items-center text-gray-300 hover:text-gray-300/80"
        >
          <EnvelopeIcon className="h-7 w-7" />
          <p className="typography-button hidden pl-2 md:inline-flex">{headerInfo.contactLabel}</p>
        </motion.div>
      </a>
    </header>
  );
}
