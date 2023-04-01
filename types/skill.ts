import { Picture } from "./picture";
import { SanityBody } from "./sanity-body";

export interface Skill extends SanityBody {
  _type: "skill";
  image: Picture;
  progress: number;
  title: string;
}
