"use client";

import { ArrowDownOnSquareIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { AboutSectionInfo } from "@types";
import SectionTitle from "@components/SectionTitle";
import PortableText from "@components/PortableText";
import { urlFor } from "../../lib/sanity.client";

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
            className="mb-10 h-56 w-56 flex-shrink-0 rounded object-cover lg:mb-0 lg:h-64 xl:h-[550px] xl:w-[450px]"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src={urlFor(aboutInfo.profilePicture.img).url()}
            alt={aboutInfo.profilePicture.alt}
          />

          <div className="px-0 md:px-10">
            <h3 className="typography-heading-4 mb-8 md:typography-heading-3">{aboutInfo.title}</h3>
            <div className="typography-body-2 md:typography-body-1">
              <PortableText value={aboutInfo.description} />
            </div>
            <div className="mt-4">
              <p>
                Want to save information about ME &mdash;{" "}
                <a
                  className="inline-flex font-bold text-primary-400 hover:text-primary-500"
                  href={`${aboutInfo.cv.asset.url}?dl=${aboutInfo.cv.asset.originalFilename}`}
                >
                  download my CV <ArrowDownOnSquareIcon className="ml-2 h-6 w-6" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
