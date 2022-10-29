import { SanityBody } from "./sanity-body";
import { Skill } from "./skill";
import { Picture } from "./picture";
import { PortableTextBlock } from "@portabletext/types";

export interface Project extends SanityBody {
  image: Picture;
  linkToBuild?: string;
  linkToRepository: string;
  summary: PortableTextBlock[];
  technologies: Skill[];
  title: string;
  _type: "project";
}
