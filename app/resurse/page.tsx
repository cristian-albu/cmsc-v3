import { GET_RESOURCES_LIST, ResourcesPage, T_ResourcesRequest } from "@/app/_views/resources";
import client from "@/lib/client";
import requestData from "@/lib/requestData";
import React from "react";
import { resourcesData } from "../_views/resources/constants";
import { E_LANG } from "@/lib/localization";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export const metadata = {
  title: "Resurse",
  description: resourcesData[E_LANG.RO].description,
};

export default async function Page() {
  const resources = await requestData(() => client.request<T_ResourcesRequest>(GET_RESOURCES_LIST));

  return <ResourcesPage resources={resources} />;
}
