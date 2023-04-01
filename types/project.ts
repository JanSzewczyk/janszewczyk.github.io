import { PortableTextBlock } from "@portabletext/types";

import { Picture } from "./picture";
import { SanityBody } from "./sanity-body";
import { Skill } from "./skill";

export interface Project extends SanityBody {
  image: Picture;
  links: ProjectLink[];
  summary: PortableTextBlock[];
  technologies: Skill[];
  title: string;
  _type: "project";
}

export type ProjectLinkType = "docs" | "github" | "npm" | "demo";

export type ProjectLink = {
  type: ProjectLinkType;
  url: string;
  _key: string;
  _type: string;
};
