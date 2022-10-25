import { SanityBody } from "./sanity-body";
import { Picture } from "./picture";

export interface Skill extends SanityBody {
  _type: "skill";
  image: Picture;
  progress: number;
  title: string;
}
