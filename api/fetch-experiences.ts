import { Experience } from "@types";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

export async function fetchExperiences(): Promise<Experience[]> {
  return await sanityClient.fetch<Experience[]>(query);
}
