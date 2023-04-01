import { Image } from "./image";
import { SanityBody } from "./sanity-body";

export interface Picture extends SanityBody {
  _type: "picture";
  alt: string;
  img: Image;
}
