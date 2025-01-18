import { gql } from "graphql-request";

const RICH_TEXT_QUERY = gql`
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
