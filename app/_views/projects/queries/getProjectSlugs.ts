import client from "@/lib/client";
import { E_COLLECTIONS } from "@/lib/utils";
import { GET_PROJECTS_SLUGS } from ".";

export default async function getProjectsSlugs(): Promise<{ slug: string }[]> {
  const slugs = await client.request<{ [E_COLLECTIONS.PROJECTS]: { items: { slug: string }[] } }>(GET_PROJECTS_SLUGS);

  return slugs[E_COLLECTIONS.PROJECTS].items;
}
