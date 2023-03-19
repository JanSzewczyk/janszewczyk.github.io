import React from "react";

type NpmIconProps = React.SVGProps<SVGSVGElement>;

export default function NpmIcon(props: NpmIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 0H0V24H24V0ZM2.57764 2.57758H21.4214V21.4214H16.6694V7.32957H11.9175V21.4214H2.57764V2.57758Z"
      />
    </svg>
  );
}
