"use client";

import { IconMail } from "@szum-tech/design-system/icons";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

import { HeaderInfo } from "@types";

interface HeaderProps {
  headerInfo: HeaderInfo;
}

export default function Header({ headerInfo }: HeaderProps) {
  return (
    <header className="sticky	top-0 z-20 shadow-md drop-shadow-xl backdrop-blur-sm lg:border-none lg:shadow-none lg:backdrop-blur-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
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
              fgColor="rgb(var(--gray-200))"
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
            className="flex cursor-pointer select-none flex-row items-center text-gray-200 hover:text-gray-200/90"
          >
            <IconMail className="h-6 w-6" />
            <p className="hidden pl-2 typography-button md:inline-flex">
              {headerInfo.contactLabel}
            </p>
          </motion.div>
        </a>
      </div>
    </header>
  );
}
