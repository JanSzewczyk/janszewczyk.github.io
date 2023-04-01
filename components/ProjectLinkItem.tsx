import * as React from "react";

import { BookOpenIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

import { GithubIcon, NpmIcon } from "@components/icons";
import { ProjectLink, ProjectLinkType } from "@types";

const PROJECT_ICON_CONFIG: Record<ProjectLinkType, { label: string; icon: React.ElementType }> = {
  demo: {
    icon: RocketLaunchIcon,
    label: "Demo"
  },
  docs: {
    icon: BookOpenIcon,
    label: "Docs"
  },
  npm: {
    icon: NpmIcon,
    label: "Npm"
  },
  github: {
    icon: GithubIcon,
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
      <Icon className="h-4 w-4 md:h-6 md:w-6" />
      <span className="typography-body-1">{config.label}</span>
    </a>
  );
}
