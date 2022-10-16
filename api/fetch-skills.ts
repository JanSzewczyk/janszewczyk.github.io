import { Skill } from "@types";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
  *[_type == "skill"]
`;

export async function fetchSkills(): Promise<Skill[]> {
  return await sanityClient.fetch<Skill[]>(query);
}
