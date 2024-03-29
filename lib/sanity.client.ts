import createImageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

const config = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false
};

export const client = createClient(config);

export function urlFor(source: SanityImageSource): ImageUrlBuilder {
  return createImageUrlBuilder(config).image(source);
}
