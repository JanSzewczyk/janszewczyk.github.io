import { groq } from "next-sanity";

import { PageInfo } from "@types";

import { client } from "../lib/sanity.client";

const query = groq`
  *[_type == "pageInfo"][0] {
    ...,
    aboutSection {
      ...,
      profilePicture->,
      cv {
        ...,
        asset->
      }
    },
    experiences[]-> {
      ...,
      companyLogo->,
      technologies[]-> {
        ...,
        image->
      }
    },
    heroSection {
      ...,
      heroPicture->
    },
    projects[]-> {
      ...,
      image->,
      technologies[]-> {
        ...,
        image->
      }
    },
    skills[]-> {
      ...,
      image->
    }
  }
`;

export async function fetchPageInfo(): Promise<PageInfo> {
  return await client.fetch<PageInfo>(query, { cache: "force-cache" });
}
