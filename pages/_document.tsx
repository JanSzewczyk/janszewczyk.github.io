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
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="When writing a meta description, keep it between 140 and 160 characters so Google can display your entire message. Don’t forget to include your keyword!"
        />
        <meta name="keywords" content={keywords.join(", ")} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
