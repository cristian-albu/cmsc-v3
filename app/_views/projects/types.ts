import { E_COLLECTIONS } from "@/lib/utils";
import { T_BaseLocalizedProject, T_ExtendedLocalidedProject } from "./queries/utils";

export type T_ProjectRequest = {
  [E_COLLECTIONS.PROJECTS]: { items: T_ExtendedLocalidedProject[] };
};

export type T_ProjectsRequest = {
  projectsProgramsCollection: { items: T_BaseLocalizedProject[] };
};

export type T_ProjectPageData = {
  project: T_ProjectRequest | null;
  related: T_ProjectsRequest | null;
};

export type T_ProjectsViews = {
  data: T_ProjectsRequest;
};

export type T_ProjectsSection = {
  projects: T_ProjectsRequest | null;
};
