import { SanityBody } from "@types";

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
