import createImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production"

  // token: "<sanity access token>",
  // EventSource: ""
};

export const sanityClient = createClient(config);

export function urlFor(source: SanityImageSource): ImageUrlBuilder {
  return createImageUrlBuilder(config).image(source);
}
