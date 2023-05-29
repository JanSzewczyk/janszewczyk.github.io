import * as React from "react";

import {
  IconBrandGithub,
  IconBrandNpm,
  IconMail,
  IconRocket
} from "@szum-tech/design-system/icons";

import { ProjectLink, ProjectLinkType } from "@types";

const PROJECT_ICON_CONFIG: Record<ProjectLinkType, { label: string; icon: React.ReactElement }> = {
  demo: {
    icon: <IconRocket />,
    label: "Demo"
  },
  docs: {
    icon: <IconMail />,
    label: "Docs"
  },
  npm: {
    icon: <IconBrandNpm />,
    label: "Npm"
  },
  github: {
    icon: <IconBrandGithub />,
    label: "Repo"
  }
};

type ProjectLinkItemProps = {
  projectLink: ProjectLink;
};

export default function ProjectLinkItem({ projectLink }: ProjectLinkItemProps) {
  const config = PROJECT_ICON_CONFIG[projectLink.type];

  const Icon = config.icon;

  return (
    <a
      href={projectLink.url}
      className="flex flex-row items-center space-x-2 hover:text-primary-500"
      target="_blank"
      rel="noopener noreferrer"
    >
      {React.cloneElement(Icon, { className: "h-4 w-4 md:h-6 md:w-6" })}
      <span className="typography-body-1">{config.label}</span>
    </a>
  );
}
