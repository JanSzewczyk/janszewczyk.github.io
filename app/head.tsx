const keywords: string[] = [
  "JanSzewczyk",
  "Jan Szewczyk",
  "Software Engineer",
  "Web Developer",
  "React Developer",
  "Szum-Tech",
  "SzumTech",
  "portfolio"
];

export default function Head() {
  return (
    <>
      <title>Jan Szewczyk`s portfolio</title>

      <meta
        name="description"
        content="Hi, my name is Jan Szewczyk and I am Software Developer - enjoy my portfolio website"
      />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
}
