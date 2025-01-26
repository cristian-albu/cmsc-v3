import { buildQueryFromDefault } from "./buildQueryFromDefault";
import { enDataConverter, enDataListConverter } from "../localization/enDataConverter";

export enum E_COLLECTIONS {
  PARTNERS = "partnersCollection",
  PROJECTS = "projectsProgramsCollection",
  EVENTS = "eventsCollection",
  RESOURCES = "resourcesCollection",
  TEAM_MEMBERS = "teamMembersCollection",
  EMOTIONAL_TREASURE_BOX_ARTICLES = "emotionalTreasureBoxArticlesCollection",
  EMOTIONAL_TREASURE_BOX_GALLERY = "emotionalTreasureBoxMediaGalleryCollection",
  EMOTIONAL_TREASURE_BOX_NEWS = "emotionalTreasureBoxNewsCollection",
}

export const RICH_TEXT = {
  json: {} as Document,
  links: { assets: { block: [{ sys: { id: "" }, description: "", url: "" }] } },
};

export const MEDIA_FILES = {
  items: { url: "", title: "" },
};

export { buildQueryFromDefault, enDataConverter, enDataListConverter };
