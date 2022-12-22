const keywords: string[] = [
  "JanSzewczyk",
  "Jan Szewczyk",
  "Software Engineer",
  "Web Developer",
  "React Developer",
  "Szum-Tech",
  "SzumTech"
];

export default function Head() {
  return (
    <>
      <title>Jan Szewczyk`s portfolio</title>

      <meta
        name="description"
        content="When writing a meta description, keep it between 140 and 160 characters so Google can display your entire message. Don’t forget to include your keyword!"
      />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
}
