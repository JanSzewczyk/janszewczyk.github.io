import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "@components/BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "@types";
import { urlFor } from "../../sanity";

interface HeroSectionProps {
  pageInfo: PageInfo;
}

function HeroSection({ pageInfo }: HeroSectionProps) {
  const [text, index] = useTypewriter({
    words: pageInfo.typings.map((t) => t.content),
    loop: true,
    delaySpeed: 2000
  });

  const currentIndex = ((index as number) - 1) % pageInfo.typings.length;
  const isCode = pageInfo.typings[currentIndex]?.asCode ?? false;

  return (
    <section id="hero" className="h-screen snap-center">
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden text-center">
        <BackgroundCircles />
        <div className="relative flex w-full flex-col items-center justify-center">
          <div className="absolute -bottom-4">
            <img
              alt=""
              className="relative mx-auto mb-6 h-32 w-32 rounded object-cover"
              src={urlFor(pageInfo.heroImage).url()}
            />
            <h2 className="text-sm uppercase tracking-2 text-gray-100">{pageInfo.role}</h2>
          </div>

          <h1 className="absolute top-8 max-w-3xl px-8 text-3xl font-semibold md:text-5xl">
            {isCode ? (
              <span className="font-code text-2xl text-yellow-500 md:text-4xl">{text}</span>
            ) : (
              <span>{text}</span>
            )}
            <Cursor cursorColor="rgb(var(--primary))" />
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
        s
      </div>
    </section>
  );
}

export default HeroSection;
