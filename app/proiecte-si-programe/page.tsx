import React from "react";
import client from "@/lib/client";
import { GET_PROJECTS_LIST } from "@/app/proiecte-si-programe/data/queries";
import { T_BaseLocalizedProject } from "@/app/proiecte-si-programe/data/queries/utils";
import ProjectsView from "./views/ProjectsView";

export type T_ProjectsRequest = {
  projectsProgramsCollection: { items: T_BaseLocalizedProject[] };
};

export default async function Page() {
  const projects = await client.request<T_ProjectsRequest>(GET_PROJECTS_LIST);

  return <ProjectsView data={projects} />;
}
