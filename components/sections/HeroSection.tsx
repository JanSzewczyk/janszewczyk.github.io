import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "@components/BackgroundCircles";
import Link from "next/link";
import { HeroSectionInfo } from "@types";
import { urlFor } from "../../sanity";
import React from "react";

interface HeroSectionProps {
  heroInfo: HeroSectionInfo;
}

function HeroSection({ heroInfo }: HeroSectionProps) {
  const [typeIndex, setTypeIndex] = React.useState<number>(0);
  const [text] = useTypewriter({
    words: heroInfo.typings.map((t) => t.content),
    loop: true,
    delaySpeed: 2000,
    onType: (index) => {
      setTypeIndex(index);
    }
  });

  const currentIndex = typeIndex % heroInfo.typings.length;
  const isCode = heroInfo.typings[currentIndex]?.asCode ?? false;

  return (
    <section id="hero" className="h-screen snap-center">
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden text-center">
        <BackgroundCircles />
        <div className="relative flex w-full flex-col items-center justify-center">
          <div className="absolute -bottom-4">
            <img
              alt={heroInfo.heroPicture.alt}
              className="relative mx-auto mb-6 h-32 w-32 rounded object-cover"
              src={urlFor(heroInfo.heroPicture.img).url()}
            />
            <h2 className="select-none text-sm uppercase tracking-2 text-typography-secondary">
              {heroInfo.role}
            </h2>
          </div>

          <h1 className="absolute top-8 max-w-3xl select-none px-8 text-3xl font-semibold md:text-5xl">
            {isCode ? (
              <span className="font-code text-2xl text-warning-500 md:text-4xl">{text}</span>
            ) : (
              <span>{text}</span>
            )}
            <Cursor cursorColor="rgb(var(--primary-500))" />
          </h1>
        </div>
        <div className="absolute bottom-8 sm:bottom-2">
          <Link href={{ hash: "about" }}>
            <button className="button-hero">About</button>
          </Link>
          <Link href={{ hash: "experience" }}>
            <button className="button-hero">Experience</button>
          </Link>
          <Link href={{ hash: "skills" }}>
            <button className="button-hero">Skills</button>
          </Link>
          <Link href={{ hash: "projects" }}>
            <button className="button-hero">Projects</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
