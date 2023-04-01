import { groq } from "next-sanity";

import { Social } from "@types";

import { client } from "../lib/sanity.client";

const query = groq`
  *[_type == "social"]
`;

export async function fetchSocials(): Promise<Social[]> {
  return await client.fetch<Social[]>(query);
}
