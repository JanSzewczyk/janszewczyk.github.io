import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "@types";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

type Data = {
  experiences: Experience[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const experiences = await sanityClient.fetch<Experience[]>(query);

  res.status(200).json({ experiences });
}
