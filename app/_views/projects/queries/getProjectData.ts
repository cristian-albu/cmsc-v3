import client from "@/lib/client";
import { GraphQLClient } from "graphql-request";
import { GET_PROJECT_BY_SLUG, GET_RELATED_PROJECTS } from ".";
import { T_ProjectPageData, T_ProjectRequest, T_ProjectsRequest } from "../types";

export default async function getProjectData(slug: string, graphqlClient: GraphQLClient = client) {
  const data: T_ProjectPageData = {
    project: null,
    related: null,
  };

  try {
    const [project, related] = await Promise.allSettled([
      graphqlClient.request<T_ProjectRequest>(GET_PROJECT_BY_SLUG, { slug: slug }),
      graphqlClient.request<T_ProjectsRequest>(GET_RELATED_PROJECTS, { slug: slug }),
    ]);

    if (project.status === "fulfilled") {
      data.project = project.value;
    }

    if (related.status === "fulfilled") {
      data.related = related.value;
    }

    return data;
  } catch (error) {
    console.error("Something went wrong with the project data fetching", error);
    return data;
  }
}
