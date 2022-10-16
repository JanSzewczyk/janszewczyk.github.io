import { SanityBody } from "./sanity-body";
import { Image } from "./image";
import { Skill } from "./skill";

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateEnded?: string;
  dateStarted: string;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Skill[];
}
