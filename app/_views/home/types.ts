import { T_TeamRequest, T_PartnersRequest } from "../about-us";
import { T_EventsRequest } from "../events";
import { T_ProjectsRequest } from "../projects";
import { T_ResourcesRequest } from "../resources";

export type T_HomeData = {
  projects: T_ProjectsRequest | null;
  events: T_EventsRequest | null;
  resources: T_ResourcesRequest | null;
  team: T_TeamRequest | null;
  partners: T_PartnersRequest | null;
};
