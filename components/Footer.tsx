import projectInfo from "../package.json";
import { FooterInfo } from "@types";

interface FooterProps {
  footerInfo: FooterInfo;
}

function Footer({ footerInfo }: FooterProps) {
  return (
    <footer className="mx-auto w-full max-w-7xl px-5 md:px-10">
      <div className="flex flex-col justify-between border-t border-t-gray-800 px-4 py-6 sm:flex-row md:px-8">
        <p className="typography-caption">
          Copyright {new Date().getFullYear()} {footerInfo.companyName}, Inc. All rights reserved.
        </p>
        <p className="typography-code mt-4 select-none text-right text-typography-secondary sm:mt-0">
          v{projectInfo.version}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
