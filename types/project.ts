import { SanityBody } from "./sanity-body";
import { Skill } from "./skill";
import { Picture } from "./picture";
import { PortableTextBlock } from "@portabletext/types";

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
