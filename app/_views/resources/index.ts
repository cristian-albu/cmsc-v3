import ResourcesSection from "./components/ResourcesSection";
import ResourcesTemplatePage from "./pages/ResoucesTemplatePage";
import ResourcesPage from "./pages/ResourcesPage";
import { GET_RESOURCES_BY_SLUG, GET_RESOURCES_LIST, GET_RESOURCES_SLUGS } from "./queries";

import type { T_AboutView, T_ResourcesRequest, T_ResourcesSection } from "./types";

export {
  GET_RESOURCES_BY_SLUG,
  GET_RESOURCES_LIST,
  GET_RESOURCES_SLUGS,
  ResourcesPage,
  ResourcesSection,
  ResourcesTemplatePage,
};

export type { T_AboutView, T_ResourcesRequest, T_ResourcesSection };
