import { SanityBody } from "./sanity-body";
import { Image } from "./image";

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  companyName: string;
  email: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  role: string;
  typings: TypingItem[];
}

export interface TypingItem {
  _key: string;
  asCode: boolean;
  content: string;
}
