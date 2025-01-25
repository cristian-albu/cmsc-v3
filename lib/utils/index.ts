import { buildQueryFromDefault } from "./buildQueryFromDefault";
import { enDataConverter, enDataListConverter } from "../localization/enDataConverter";

export enum E_COLLECTIONS {
  PARTNERS = "partnersCollection",
  PROJECTS = "projectsProgramsCollection",
  EVENTS = "eventsCollection",
  RESOURCES = "resourcesCollection",
  TEAM_MEMBERS = "teamMembersCollection",
}

export const RICH_TEXT = {
  json: {} as Document,
  links: { assets: { block: [{ sys: { id: "" }, description: "", url: "" }] } },
};

export { buildQueryFromDefault, enDataConverter, enDataListConverter };
