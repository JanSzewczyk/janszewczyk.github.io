import { FooterInfo } from "@types";

import projectInfo from "../package.json";

interface FooterProps {
  footerInfo: FooterInfo;
}

function Footer({ footerInfo }: FooterProps) {
  return (
    <footer className="mx-auto w-full max-w-7xl px-5 md:px-10">
      <div className="flex flex-col justify-between border-t border-t-gray-400 px-4 py-6 sm:flex-row md:px-8">
        <p className="typography-caption">
          Copyright {new Date().getFullYear()} {footerInfo.companyName}, Inc. All rights reserved.
        </p>
        <p className="mt-4 select-none text-right text-gray-200 typography-code sm:mt-0">
          v{projectInfo.version}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
