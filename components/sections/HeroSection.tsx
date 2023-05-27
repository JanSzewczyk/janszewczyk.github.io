"use client";

import React from "react";

import Image from "next/image";

import { Button } from "@szum-tech/design-system";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircles from "@components/BackgroundCircles";
import { urlFor } from "@lib/sanity.client";
import { HeroSectionInfo } from "@types";

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

            <h2 className="text-typography-secondary select-none uppercase typography-subtitle-1 md:typography-heading-6">
              {heroInfo.role}
            </h2>
          </div>

          <h1 className="absolute top-8 max-w-3xl select-none px-8 typography-heading-3 md:typography-heading-2">
            {isCode ? (
              <span className="text-2xl text-warning-500 typography-code md:text-3xl">{text}</span>
            ) : (
              <span>{text}</span>
            )}
            <Cursor cursorColor="rgb(var(--primary-500))" />
          </h1>
        </div>
        <div className="absolute bottom-2 inline-flex gap-2">
          <Button as="a" href="#about">
            About
          </Button>
          <Button as="a" href="#experience">
            Experience
          </Button>
          <Button as="a" href="#skills">
            Skills
          </Button>
          <Button as="a" href="#projects">
            Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
