import { PageInfo } from "@types";

export async function fetchPageInfo(): Promise<PageInfo> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-page-info`);
  const data = await res.json();

  return data.pageInfo;
}
