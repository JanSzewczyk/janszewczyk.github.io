import { PageInfo } from "@types";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
  *[_type == "pageInfo"][0]
`;

export async function fetchPageInfo(): Promise<PageInfo> {
  return await sanityClient.fetch<PageInfo>(query);
}
