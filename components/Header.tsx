import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { Social } from "@types";

interface HeaderProps {
  socials: Social[];
}

function Header({ socials }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-center justify-between overflow-hidden px-4 pt-2">
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
          <SocialIcon
            aria-label={social.title}
            url={social.url}
            key={social._id}
            fgColor="rgb(var(--gray-300))"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <Link href={{ href: "", hash: "contact" }} aria-label="Link To Contact">
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
          className="flex cursor-pointer select-none flex-row items-center text-gray-300 hover:text-gray-300/80"
        >
          <EnvelopeIcon className="h-7 w-7" />
          <p className="hidden pl-2 text-sm uppercase md:inline-flex">Get In Touch</p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
