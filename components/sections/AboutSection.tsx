import { motion } from "framer-motion";
import { PageInfo } from "@types";
import { urlFor } from "../../sanity";
import SectionTitle from "@components/SectionTitle";

interface AboutSectionProps {
  pageInfo: PageInfo;
}

function AboutSection({ pageInfo }: AboutSectionProps) {
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
            src={urlFor(pageInfo.profilePic).url()}
          />

          <div className="px-0 md:px-10">
            <h4 className="mb-8 text-4xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h4>
            <p className="text-lg">{pageInfo.backgroundInformation}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
