import { gql } from "graphql-request";

export interface Project {
  name: string;
  slug: string;
  thumbnail: {
    url: string;
    description: string;
  };
  summary: string;
  startDate: string;
  endDate: string | null;
  featured: boolean;
  content: {
    json: any;
  };
}

export const GET_PROJECTS_AND_PROGRAMS = gql`
  query {
    projectsProgramsCollection {
      items {
        name
        slug
        thumbnail {
          url
          description
        }
        summary
        startDate
        endDate
        featured
        content {
          json
        }
      }
    }
  }
`;
