import React from "react";

interface SectionTitleProps {
  subTitle?: React.ReactNode;
  title: React.ReactNode;
}

export default function SectionTitle({ subTitle, title }: SectionTitleProps) {
  return (
    <div className="mb-10 md:mb-24">
      <h2 className="typography-heading-5 text-center uppercase text-typography-secondary md:typography-heading-4">
        {title}
      </h2>
      {subTitle ? (
        <h3 className="typography-subtitle-1 mt-4 text-center uppercase text-typography-disabled">
          {subTitle}
        </h3>
      ) : null}
    </div>
  );
}
