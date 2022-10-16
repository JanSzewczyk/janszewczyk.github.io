import { Social } from "@types";

export async function fetchSocials(): Promise<Social[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-socials`);
  const data = await res.json();

  return data.socials;
}
