import { Experience } from "@types";

export async function fetchExperiences(): Promise<Experience[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-experiences`);
  const data = await res.json();

  return data.experiences;
}
