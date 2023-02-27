"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "@components/BackgroundCircles";
import { HeroSectionInfo } from "@types";
import React from "react";
import Image from "next/image";
import { urlFor } from "@lib/sanity.client";

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
            <div className="relative mx-auto mb-6 h-32 w-32 md:h-52 md:w-52">
              <Image
                alt={heroInfo.heroPicture.alt}
                className="rounded object-cover"
                fill
                src={urlFor(heroInfo.heroPicture.img).url()}
              />
            </div>

            <h2 className="typography-subtitle-1 select-none uppercase text-typography-secondary md:typography-heading-6">
              {heroInfo.role}
            </h2>
          </div>

          <h1 className="typography-heading-3 absolute top-8 max-w-3xl select-none px-8 md:typography-heading-2">
            {isCode ? (
              <span className="typography-code text-2xl text-warning-500 md:text-3xl">{text}</span>
            ) : (
              <span>{text}</span>
            )}
            <Cursor cursorColor="rgb(var(--primary-500))" />
          </h1>
        </div>
        <div className="absolute bottom-2">
          <a href="#about">
            <button className="button-hero">About</button>
          </a>
          <a href="#experience">
            <button className="button-hero">Experience</button>
          </a>
          <a href="#skills">
            <button className="button-hero">Skills</button>
          </a>
          <a href="#projects">
            <button className="button-hero">Projects</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
