import { Picture } from "./picture";
import { SanityBody } from "./sanity-body";
import { Skill } from "./skill";

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyLogo: Picture;
  dateEnded?: string;
  dateStarted: string;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Skill[];
}
