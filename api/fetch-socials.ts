import { Social } from "@types";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
  *[_type == "social"]
`;

export async function fetchSocials(): Promise<Social[]> {
  return await sanityClient.fetch<Social[]>(query);
}
