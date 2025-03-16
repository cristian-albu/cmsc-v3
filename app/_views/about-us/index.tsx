import type {
  T_AboutView,
  T_CouncilSection,
  T_PartnersRequest,
  T_PartnersSection,
  T_TeamRequest,
  T_TeamSection,
} from "./types";

import CouncilSection from "./components/CouncilSection";
import PartnersSection from "./components/PartnersSection";
import AboutPage from "./pages/AboutPage";
import { GET_PARTNERS_LIST, GET_TEAM_MEMBERS_SLUGS, GET_TEAM_MEMBER_BY_SLUG, GET_TEAM_MEMBER_LIST } from "./queries";

export {
  AboutPage,
  CouncilSection,
  GET_PARTNERS_LIST,
  GET_TEAM_MEMBERS_SLUGS,
  GET_TEAM_MEMBER_BY_SLUG,
  GET_TEAM_MEMBER_LIST,
  PartnersSection,
};

export type { T_AboutView, T_CouncilSection, T_PartnersRequest, T_PartnersSection, T_TeamRequest, T_TeamSection };
