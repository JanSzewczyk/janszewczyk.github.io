import { ArrowDownOnSquareIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { AboutSectionInfo } from "@types";
import { urlFor } from "../../sanity";
import SectionTitle from "@components/SectionTitle";
import PortableText from "@components/PortableText";

interface AboutSectionProps {
  aboutInfo: AboutSectionInfo;
}

function AboutSection({ aboutInfo }: AboutSectionProps) {
  function downloadCV(): void {
    fetch("files/Jan-Szewczyk-CV.pdf", {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf"
      }
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `Jan-Szewczyk-CV.pdf`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the
        link.parentNode?.removeChild(link);
      });
  }

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
            <h3 className="mb-8 text-3xl font-semibold md:text-4xl">{aboutInfo.title}</h3>
            <div className="text-md">
              <PortableText value={aboutInfo.description} />
            </div>
            <div className="mt-4">
              <p className="">
                Want to save information obout ME &mdash;{" "}
                <button
                  className="inline-flex font-bold text-primary-400 hover:text-primary-500"
                  onClick={downloadCV}
                >
                  download my CV <ArrowDownOnSquareIcon className="ml-2 h-6 w-6" />
                </button>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
