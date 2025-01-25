import React from "react";
import client from "@/lib/client";
import ProjectsView from "@/app/proiecte-si-programe/views";
import { GET_PROJECTS_LIST } from "@/app/proiecte-si-programe/data/queries";
import { T_BaseLocalizedProject } from "@/app/proiecte-si-programe/data/queries/utils";

export type T_ProjectsRequest = {
  projectsProgramsCollection: { items: T_BaseLocalizedProject[] };
};

export default async function Page() {
  const { projectsProgramsCollection } = await client.request<T_ProjectsRequest>(GET_PROJECTS_LIST);

  return <ProjectsView items={projectsProgramsCollection.items} />;
}
