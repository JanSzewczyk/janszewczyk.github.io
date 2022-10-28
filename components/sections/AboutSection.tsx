import { motion } from "framer-motion";
import { AboutSectionInfo } from "@types";
import { urlFor } from "../../sanity";
import SectionTitle from "@components/SectionTitle";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

interface AboutSectionProps {
  aboutInfo: AboutSectionInfo;
}

function AboutSection({ aboutInfo }: AboutSectionProps) {
  return (
    <section className="min-h-screen snap-start pt-16 pb-24 md:pt-24" id="about">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col px-5 text-center md:px-10 lg:text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SectionTitle title="About" />

        <div className="flex flex-col items-center lg:flex-row lg:items-start">
          <motion.img
            className="md:w-94 mb-10 h-56 w-56 flex-shrink-0 rounded object-cover lg:mb-0 lg:h-64 xl:h-[600px] xl:w-[500px]"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src={urlFor(aboutInfo.profilePicture.img).url()}
            alt={aboutInfo.profilePicture.alt}
          />

          <div className="px-0 md:px-10">
            <h3 className="mb-8 text-3xl font-semibold md:text-4xl">{aboutInfo.title}</h3>
            <div className="text-md md:text-lg">
              <PortableText
                value={aboutInfo.description}
                components={{
                  block: {
                    normal: ({ children }) => <p className="mb-2">{children}</p>
                  },
                  marks: {
                    link: ({ children, value }) => {
                      const content = Array.isArray(children) ? children[0] : children;

                      if (value.href.startsWith("#")) {
                        return (
                          <Link href={{ href: "", hash: value.href }}>
                            <a className="font-bold text-primary-400 hover:text-primary-500">
                              {content}
                            </a>
                          </Link>
                        );
                      }

                      if (value.href.startsWith("/")) {
                        return (
                          <Link href={{ href: value.href }}>
                            <a className="font-bold text-primary-400 hover:text-primary-500">
                              {content}
                            </a>
                          </Link>
                        );
                      }

                      return (
                        <a
                          className="font-bold text-primary-400 hover:text-primary-500"
                          href={value.href}
                        >
                          {children}
                        </a>
                      );
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
