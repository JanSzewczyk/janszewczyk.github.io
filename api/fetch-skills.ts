import { groq } from "next-sanity";

import { Skill } from "@types";

import { client } from "../lib/sanity.client";

const query = groq`
  *[_type == "skill"]
`;

export async function fetchSkills(): Promise<Skill[]> {
  return await client.fetch<Skill[]>(query);
}
