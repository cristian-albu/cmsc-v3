import client from "@/lib/client";
import { GET_PROJECTS_LIST, ProjectsPage, T_ProjectsRequest } from "@/app/_views/projects";

export default async function Page() {
  const projects = await client.request<T_ProjectsRequest>(GET_PROJECTS_LIST);

  return <ProjectsPage data={projects} />;
}
