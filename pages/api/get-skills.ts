import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Skill } from "@types";

const query = groq`
  *[_type == "skill"]
`;

type Data = {
  skills: Skill[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const skills = await sanityClient.fetch<Skill[]>(query);

  res.status(200).json({ skills });
}
