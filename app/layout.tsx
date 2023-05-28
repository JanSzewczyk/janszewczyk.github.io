import { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Jan Szewczyk`s portfolio",
  description:
    "Hi, my name is Jan Szewczyk and I am Software Developer - enjoy my portfolio website",
  viewport: "width=device-width, initial-scale=1",
  keywords: [
    "JanSzewczyk",
    "Jan Szewczyk",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Szum-Tech",
    "SzumTech",
    "portfolio"
  ],
  icons: "/favicon.ico"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
