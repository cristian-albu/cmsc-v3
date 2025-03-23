import { E_COLLECTIONS } from "@/lib/utils";
import { T_BaseLocalizedResources, T_ExtendedLocalizedResources } from "./queries/utils";

export type T_ResourcesRequest = {
  [E_COLLECTIONS.RESOURCES]: { items: T_BaseLocalizedResources[] };
};

export type T_FullResourceRequest = {
  [E_COLLECTIONS.RESOURCES]: { items: T_ExtendedLocalizedResources[] };
};

export type T_AboutView = {
  eventsData: T_ResourcesRequest;
};

export type T_ResourcesSection = {
  resources: T_ResourcesRequest | null;
};
