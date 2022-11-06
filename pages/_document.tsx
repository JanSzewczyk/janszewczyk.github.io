import { Html, Head, Main, NextScript } from "next/document";

const keywords: string[] = [
  "JanSzewczyk",
  "Jan Szewczyk",
  "Software Engineer",
  "Web Developer",
  "React Developer",
  "Szum-Tech",
  "SzumTech"
];

function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta
          name="description"
          content="When writing a meta description, keep it between 140 and 160 characters so Google can display your entire message. Don’t forget to include your keyword!"
        />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
        <meta name="keywords" content={keywords.join(", ")} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
