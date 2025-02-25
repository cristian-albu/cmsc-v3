import { GraphQLClient } from "graphql-request";

const inputUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`;
const headers = {
  Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
};

const client = new GraphQLClient(inputUrl, {
  fetch: (input: RequestInfo | URL, init?: RequestInit) => fetch(input, { ...init, next: { revalidate: 3600 } }),
  headers: headers,
});

export default client;
