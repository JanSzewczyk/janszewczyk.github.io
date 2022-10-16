import { SanityBody } from "./sanity-body";
import { Image } from "./image";
import { Skill } from "./skill";

export interface Project extends SanityBody {
  _type: "project";
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Skill[];
  title: string;
}
