import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { GlobalInfo } from "@types";

const query = groq`
  *[_type == "global"][0] {
    ...,
    header {
      ...,
      socials[]->
    }
  }
`;

export async function fetchGlobalInfo(): Promise<GlobalInfo> {
  return await sanityClient.fetch<GlobalInfo>(query);
}
