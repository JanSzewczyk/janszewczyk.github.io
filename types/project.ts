import { SanityBody } from "./sanity-body";
import { Skill } from "./skill";
import { Picture } from "./picture";

export interface Project extends SanityBody {
  _type: "project";
  image: Picture;
  linkToBuild: string;
  summary: string;
  technologies: Skill[];
  title: string;
}
