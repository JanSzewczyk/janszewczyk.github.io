import { Project } from "@types";

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-projects`);
  const data = await res.json();

  return data.projects;
}
