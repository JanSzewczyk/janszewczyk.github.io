import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "@components/BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "@types";
import { urlFor } from "../../sanity";

interface HeroSectionProps {
  pageInfo: PageInfo;
}

function HeroSection({ pageInfo }: HeroSectionProps) {
  const [text] = useTypewriter({
    words: [`Hello there, The Name's ${pageInfo.name}`, "Developer", pageInfo.name],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <section id="hero" className="snap-start">
      <div className="flex h-screen flex-col items-center justify-center overflow-hidden text-center">
        <BackgroundCircles />
        <img
          alt=""
          className="relative mx-auto mb-6 h-32 w-32 rounded-3xl object-cover"
          src={urlFor(pageInfo.heroImage).url()}
        />
        <div className="z-20">
          <h2 className="pb-4 text-sm uppercase tracking-2 text-gray-500">{pageInfo.role}</h2>
          <h1 className="max-w-4xl px-10 text-5xl font-semibold lg:text-6xl">
            <span>{text}</span>
            <Cursor cursorColor="blue" />
          </h1>

          <div className="mt-6">
            <Link href="#about">
              <button className="button-hero">About</button>
            </Link>
            <Link href="#experience">
              <button className="button-hero">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="button-hero">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="button-hero">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
