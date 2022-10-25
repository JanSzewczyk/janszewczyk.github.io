import { SanityBody } from "./sanity-body";
import { Social } from "./social";

export interface GlobalInfo extends SanityBody {
  _type: "global";
  footer: FooterInfo;
  header: HeaderInfo;
}

export interface HeaderInfo {
  contactLabel: string;
  socials: Social[];
}

export interface FooterInfo {
  companyName: string;
}
