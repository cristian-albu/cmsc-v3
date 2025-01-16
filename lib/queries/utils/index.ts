import { E_LANG } from "@/lib/localization";

export enum E_COLLECTIONS {
  PARTNERS = "partnersCollection",
  PROJECTS = "projectsProgramsCollection",
  EVENTS = "eventsCollection",
  RESOURCES = "resourcesCollection",
  TEAM_MEMBERS = "teamMembersCollection",
}

export function buildQueryFromDefault<T extends object>(defaultFullItem: T): string {
  return Object.entries(defaultFullItem).reduce((accum, [key, val]) => {
    if (Array.isArray(val)) {
      return `${accum}\n${key}[]`;
    }

    if (val && typeof val === "object") {
      if ("json" in val) {
        return `${accum}\n${key} \n${RICH_TEXT_QUERY}\n`;
      }
      const nestedFields = buildQueryFromDefault(val);

      if (nestedFields.trim() === "") {
        return accum;
      }
      return `${accum}\n${key} {\n${nestedFields}\n}`;
    }

    return `${accum}\n${key}`;
  }, "");
}

type T_EnLocalizedT<T extends Record<string, any>> = T & { [key in `${string}${E_LANG.EN}`]: any };

export function enDataConverter<T extends Record<string, any>>(data: T_EnLocalizedT<T>): { [E_LANG.RO]: T; [E_LANG.EN]: T } {
  const enData = Object.entries(data).reduce((accum, [key, val]) => {
    if (key.endsWith("En")) {
      const baseKey = key.slice(0, -2);
      return { ...accum, [baseKey]: val };
    }
    return accum;
  }, {} as T);

  const normalData = Object.entries(data).reduce((accum, [key, val]) => {
    if (!key.endsWith("En")) {
      return { ...accum, [key]: val };
    }
    return accum;
  }, {} as T);

  return {
    [E_LANG.RO]: normalData,
    [E_LANG.EN]: { ...normalData, ...enData },
  };
}

export function enDataListConverter<T extends Record<string, any>>(data: T_EnLocalizedT<T>[]) {
  return data.map((item) => {
    return enDataConverter(item);
  });
}

export const RICH_TEXT = {
  json: {} as Document,
  links: { assets: { block: [{ sys: { id: "" }, description: "", url: "" }] } },
};

export const RICH_TEXT_QUERY = `
{
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        title
        description
        width
        height
        fileName
      }
    }
  }
}
`;
