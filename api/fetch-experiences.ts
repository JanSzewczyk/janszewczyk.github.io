import { Experience } from "@types";
import { groq } from "next-sanity";
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
