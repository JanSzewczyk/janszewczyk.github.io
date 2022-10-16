import { Image } from "./image";
import { SanityBody } from "./sanity-body";

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}
