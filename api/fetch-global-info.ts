import { groq } from "next-sanity";
import { GlobalInfo } from "@types";
import { client } from "../lib/sanity.client";

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
  return await client.fetch<GlobalInfo>(query, { cache: "force-cache" });
}
