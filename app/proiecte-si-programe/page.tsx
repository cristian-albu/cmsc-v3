import React from "react";
import client from "@/lib/client";
import ProjectsView from "@/components/views/projects";
import { GET_PROJECTS_LIST } from "@/lib/queries/projects";
import { T_BaseLocalizedProject } from "@/lib/queries/projects/utils";

type T_ProjectsRequest = {
  projectsProgramsCollection: { items: T_BaseLocalizedProject[] };
};

export default async function Page() {
  const { projectsProgramsCollection } = await client.request<T_ProjectsRequest>(GET_PROJECTS_LIST);

  return <ProjectsView items={projectsProgramsCollection.items} />;
}
