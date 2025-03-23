import type {
  T_EventRequest,
  T_EventsRequest,
  T_EventsSection,
  T_EventsSlugData,
  T_EventsTemplateView,
  T_EventsView,
} from "./types";

import EventsList from "./components/EventsList";
import EventsSection from "./components/EventsSection";
import EventsPage from "./pages/EventsPage";
import EventsTemplatePage from "./pages/EventsTemplatePage";
import { GET_EVENTS_LIST, GET_EVENTS_SLUGS, GET_EVENT_BY_SLUG, GET_RELATED_EVENTS } from "./queries";

export {
  EventsList,
  EventsPage,
  EventsSection,
  EventsTemplatePage,
  GET_EVENTS_LIST,
  GET_EVENTS_SLUGS,
  GET_EVENT_BY_SLUG,
  GET_RELATED_EVENTS,
};

export type { T_EventRequest, T_EventsRequest, T_EventsSection, T_EventsSlugData, T_EventsTemplateView, T_EventsView };
