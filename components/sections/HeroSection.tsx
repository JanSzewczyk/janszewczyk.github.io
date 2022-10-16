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
    <section id="hero" className="mb-2 h-screen snap-center">
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden text-center">
        <BackgroundCircles />

        <div className="relative flex w-full flex-col items-center justify-center">
          <div className="absolute -bottom-4">
            <img
              alt=""
              className="relative mx-auto mb-6 h-32 w-32 rounded-3xl object-cover"
              src={urlFor(pageInfo.heroImage).url()}
            />
            <h2 className="text-sm uppercase tracking-2 text-gray-500">{pageInfo.role}</h2>
          </div>

          <h1 className="absolute top-8 max-w-3xl px-8 text-5xl font-semibold lg:text-6xl">
            <span>{text}</span>
            <Cursor cursorColor="blue" />
          </h1>
        </div>

        <div className="absolute bottom-2">
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
    </section>
  );
}

export default HeroSection;
