import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*<link rel="preconnect" href="https://fonts.googleapis.com" />*/}
        {/*<link rel="preconnect" href="https://fonts.gstatic.com" />*/}
        {/*<link*/}
        {/*  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"*/}
        {/*  rel="stylesheet"*/}
        {/*/>*/}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
