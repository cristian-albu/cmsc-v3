import type { T_ProjectPageData, T_ProjectRequest, T_ProjectsRequest, T_ProjectsViews } from "./types";

import ProjectsList from "./components/ProjectsList";
import ProjectsSection from "./components/ProjectsSection";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectsTemplatePage from "./pages/ProjectsTemplatePage";
import { GET_PROJECT_BY_SLUG, GET_PROJECTS_LIST, GET_PROJECTS_SLUGS, GET_RELATED_PROJECTS } from "./queries";
import getProjectData from "./queries/getProjectData";
import getProjectsSlugs from "./queries/getProjectSlugs";

export {
  GET_PROJECT_BY_SLUG,
  GET_PROJECTS_LIST,
  GET_PROJECTS_SLUGS,
  GET_RELATED_PROJECTS,
  getProjectData,
  getProjectsSlugs,
  ProjectsList,
  ProjectsPage,
  ProjectsSection,
  ProjectsTemplatePage,
};

export { T_ProjectPageData, T_ProjectRequest, T_ProjectsRequest, T_ProjectsViews };
