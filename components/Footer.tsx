import projectInfo from "../package.json";

interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <footer className="mx-auto w-full max-w-7xl px-5 md:px-10">
      <div className="flex flex-col justify-between border-t border-t-gray-300 py-10 px-4 sm:flex-row md:py-6 md:px-8">
        <p className="text-lg text-typography">
          Copyright {new Date().getFullYear()} Szum-Tech, Inc. All rights reserved.
        </p>
        <p className="mt-4 text-right font-code text-sm text-gray-100 sm:mt-0">
          v{projectInfo.version}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
