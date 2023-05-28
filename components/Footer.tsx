import { FooterInfo } from "@types";

import projectInfo from "../package.json";

interface FooterProps {
  footerInfo: FooterInfo;
}

export default function Footer({ footerInfo }: FooterProps) {
  return (
    <footer className="mx-auto w-full max-w-7xl px-5 md:px-10">
      <div className="flex flex-col justify-between border-t border-t-gray-400 px-4 py-6 sm:flex-row md:px-8">
        <p className="typography-caption">
          Copyright {new Date().getFullYear()} {footerInfo.companyName}, Inc. All rights reserved.
        </p>
        <p className="mt-4 select-none text-right font-code text-sm text-gray-300 sm:mt-0">
          {process.env.NODE_ENV === "production" ? `v${projectInfo.version}` : "dev"}
        </p>
      </div>
    </footer>
  );
}
