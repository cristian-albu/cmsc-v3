import React from "react";

import client from "@/lib/client";
import { GET_PROJECTS_AND_PROGRAMS, Project } from "@/lib/queries/projects";
import HomeView from "@/components/views/home";

const HomeServerPage = async () => {
  const { projectsProgramsCollection } = await client.request<{ projectsProgramsCollection: Project[] }>(
    GET_PROJECTS_AND_PROGRAMS
  );

  return <HomeView items={projectsProgramsCollection} />;
};

export default HomeServerPage;
