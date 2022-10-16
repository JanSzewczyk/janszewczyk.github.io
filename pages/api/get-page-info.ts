import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo } from "@types";

const query = groq`
  *[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const pageInfo = await sanityClient.fetch<PageInfo>(query);

  res.status(200).json({ pageInfo });
}
