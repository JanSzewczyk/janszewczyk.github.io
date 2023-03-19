import { ProjectLink, ProjectLinkType } from "@types";
import { BookOpenIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import { GithubIcon, NpmIcon } from "@components/icons";
import * as React from "react";

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

  return (
    <a
      href={projectLink.url}
      className="flex flex-row items-center space-x-2 hover:text-primary-500"
      target="_blank"
      rel="noopener noreferrer"
    >
      <config.icon className="h-6 w-6" />
      <span className="typography-body-1">{config.label}</span>
    </a>
  );
}
