import { T_Params } from "@/lib/types";
import { getProjectData, getProjectsSlugs, ProjectsTemplatePage } from "@/app/_views/projects";

import { notFound } from "next/navigation";
import { home_projectsData } from "@/app/_views/home/static";
import { E_LANG } from "@/lib/localization";

export async function generateStaticParams() {
  const slugs = await getProjectsSlugs();

  return slugs.map(({ slug }) => ({ slug }));
}

export const metadata = {
  title: "Proiecte si programe",
  description: home_projectsData[E_LANG.RO].description,
};

export default async function Page({ params }: T_Params) {
  const currSlug = (await params).slug;

  if (!currSlug) {
    notFound();
  }

  const data = await getProjectData(currSlug);

  return <ProjectsTemplatePage project={data.project} related={data.related} />;
}
