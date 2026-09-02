import client from "@/lib/client";
import { GET_PROJECTS_LIST, ProjectsPage, T_ProjectsRequest } from "@/app/_views/projects";
import { home_projectsData } from "../_views/home/static";
import { E_LANG } from "@/lib/localization";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export const metadata = {
  title: "Proiecte si programe",
  description: home_projectsData[E_LANG.RO].description,
};

export default async function Page() {
  const projects = await client.request<T_ProjectsRequest>(GET_PROJECTS_LIST);

  return <ProjectsPage data={projects} />;
}
