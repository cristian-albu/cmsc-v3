import { GraphQLClient } from "graphql-request";
import { T_ProjectPageData } from "../../[slug]/page";
import { T_ExtendedLocalidedProject } from "./utils";
import { T_ProjectsRequest } from "../../page";
import { GET_PROJECT_BY_SLUG, GET_RELATED_PROJECTS } from ".";
import client from "@/lib/client";
import { E_COLLECTIONS } from "@/lib/utils";

export type T_ProjectRequest = {
  [E_COLLECTIONS.PROJECTS]: { items: T_ExtendedLocalidedProject[] };
};

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
