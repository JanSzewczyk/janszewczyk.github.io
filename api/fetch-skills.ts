import { Skill } from "@types";

export async function fetchSkills(): Promise<Skill[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-skills`);
  const data = await res.json();

  return data.skills;
}
