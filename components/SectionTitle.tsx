import React from "react";

interface SectionTitleProps {
  subTitle?: React.ReactNode;
  title: React.ReactNode;
}

export default function SectionTitle({ subTitle, title }: SectionTitleProps) {
  return (
    <div className="mb-10 md:mb-24">
      <h2 className="text-center uppercase text-gray-100 typography-heading-5 md:typography-heading-4">
        {title}
      </h2>
      {subTitle ? (
        <h3 className="mt-4 text-center uppercase text-gray-300 typography-subtitle-1">
          {subTitle}
        </h3>
      ) : null}
    </div>
  );
}
