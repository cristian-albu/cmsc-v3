import { E_COLLECTIONS } from "@/lib/utils";
import React from "react";
import { T_BaseLocalizedResources } from "./data/queries/utils";

export type T_ResourcesRequest = {
  [E_COLLECTIONS.RESOURCES]: { items: T_BaseLocalizedResources[] };
};

export type T_AboutView = {
  eventsData: T_ResourcesRequest;
};

const ResourcesServerPage = () => {
  return <div>ResourcesPage</div>;
};

export default ResourcesServerPage;
