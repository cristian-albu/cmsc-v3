import { T_Params } from "@/lib/types";
import { getProjectData, getProjectsSlugs, ProjectsTemplatePage } from "@/app/_views/projects";

import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await getProjectsSlugs();

  return slugs.map(({ slug }) => ({ slug }));
}

export default async function Page({ params }: T_Params) {
  const currSlug = (await params).slug;

  if (!currSlug) {
    notFound();
  }

  const data = await getProjectData(currSlug);

  console.log(data);

  return <ProjectsTemplatePage project={data.project} related={data.related} />;
}
