import { groq } from "next-sanity";

import { Experience } from "@types";

import { client } from "../lib/sanity.client";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

export async function fetchExperiences(): Promise<Experience[]> {
  return await client.fetch<Experience[]>(query);
}
