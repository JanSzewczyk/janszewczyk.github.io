import { PortableTextBlock } from "@portabletext/types";

import { Experience } from "./experience";
import { File } from "./file";
import { Picture } from "./picture";
import { Project } from "./project";
import { SanityBody } from "./sanity-body";
import { Skill } from "./skill";

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  aboutSection: AboutSectionInfo;
  companyName: string;
  contactSection: ContactSectionInfo;
  experiences: Experience[];
  heroSection: HeroSectionInfo;
  projects: Project[];
  skills: Skill[];
  name: string;
  role: string;
}

export interface AboutSectionInfo {
  cv: File;
  description: PortableTextBlock[];
  profilePicture: Picture;
  title: string;
}
export interface ContactSectionInfo {
  address: string;
  email: string;
  phoneNumber: string;
  title: string;
}
export interface HeroSectionInfo {
  heroPicture: Picture;
  role: string;
  typings: TypingItem[];
}

export interface TypingItem {
  _key: string;
  asCode: boolean;
  content: string;
}
