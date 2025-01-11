import client from "@/lib/client";
import { GET_PROJECT_BY_SLUG, GET_PROJECTS_SLUGS } from "@/lib/queries/projects";
import { T_BaseProject } from "@/lib/queries/projects/utils";

import { notFound } from "next/navigation";
import React from "react";

type T_Params = { params: Promise<{ slug: string }> };

type T_ProjectParams = {
  projectsProgramsCollection: { items: T_BaseProject[] };
};

export async function getSlugs() {
  const { projectsProgramsCollection } = await client.request<{
    projectsProgramsCollection: { items: { slug: string }[] };
  }>(GET_PROJECTS_SLUGS);

  return projectsProgramsCollection.items;
}

export async function generateStaticParams() {
  const slugs = await getSlugs();

  return slugs;
}

export default async function Page({ params }: T_Params) {
  const currSlug = (await params).slug;

  const [{ projectsProgramsCollection }, slugs] = await Promise.all([
    client.request<T_ProjectParams>(GET_PROJECT_BY_SLUG, { slug: currSlug }),
    getSlugs,
  ]);

  const project = projectsProgramsCollection.items[0];

  if (!project) {
    notFound();
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>{project.name}</h1>
      <p>{project.summary}</p>
      {/* Render other project data */}
    </div>
  );
}
