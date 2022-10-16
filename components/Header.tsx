import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { Social } from "@types";

interface HeaderProps {
  socials: Social[];
}

function Header({ socials }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between overflow-hidden px-4 pt-2 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon url={social.url} key={social._id} fgColor="grey" bgColor="transparent" />
        ))}
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
          className="flex cursor-pointer flex-row items-center text-gray-300"
        >
          <SocialIcon
            network="email"
            className="cursor-pointer"
            fgColor="grey"
            bgColor="transparent"
          />
          <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">Get In Touch</p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
