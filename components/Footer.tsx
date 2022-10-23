import projectInfo from "../package.json";

interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <footer className="mx-auto w-full max-w-7xl px-5 md:px-10">
      <div className="flex flex-col justify-between border-t border-t-gray-800 py-10 px-4 sm:flex-row md:py-6 md:px-8">
        <p className="text-lg">
          Copyright {new Date().getFullYear()} Szum-Tech, Inc. All rights reserved.
        </p>
        <p className="mt-4 select-none text-right font-code text-sm text-typography-secondary sm:mt-0">
          v{projectInfo.version}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
