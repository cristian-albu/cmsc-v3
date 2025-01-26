import client from "@/lib/client";
import { GET_PROJECTS_SLUGS } from "../data/queries";

export async function getSlugs() {
  const { projectsProgramsCollection } = await client.request<{
    projectsProgramsCollection: { items: { slug: string }[] };
  }>(GET_PROJECTS_SLUGS);

  return projectsProgramsCollection.items;
}
