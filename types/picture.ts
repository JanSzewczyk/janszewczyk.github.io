import { SanityBody } from "./sanity-body";
import { Image } from "./image";

export interface Picture extends SanityBody {
  _type: "picture";
  alt: string;
  img: Image;
}
