import { Project } from "@types";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

export async function fetchProjects(): Promise<Project[]> {
  return await sanityClient.fetch<Project[]>(query);
}
