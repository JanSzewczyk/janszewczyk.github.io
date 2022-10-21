import React from "react";

interface SectionTitleProps {
  subTitle?: React.ReactNode;
  title: React.ReactNode;
}

function SectionTitle({ subTitle, title }: SectionTitleProps) {
  return (
    <div className="mb-10 md:mb-24">
      <h2 className="text-center text-2xl uppercase tracking-2 text-gray-200 md:tracking-8">
        {title}
      </h2>
      {subTitle ? (
        <h3 className="mt-4 text-center uppercase tracking-1 text-gray-300">{subTitle}</h3>
      ) : null}
    </div>
  );
}

export default SectionTitle;
