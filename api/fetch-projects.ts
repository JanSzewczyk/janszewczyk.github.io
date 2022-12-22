import { Project } from "@types";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

export async function fetchProjects(): Promise<Project[]> {
  return await client.fetch<Project[]>(query);
}
