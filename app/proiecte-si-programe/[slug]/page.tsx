import ProjectTemplateView from "../views/ProjectTemplateView";
import { T_ProjectsRequest } from "../page";
import getProjectData, { T_ProjectRequest } from "../data/queries/getProjectData";
import getProjectsSlugs from "../data/queries/getProjectSlugs";
import { T_Params } from "@/lib/types";
import { notFound } from "next/navigation";

export type T_ProjectPageData = {
  project: T_ProjectRequest | null;
  related: T_ProjectsRequest | null;
};

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

  return <ProjectTemplateView project={data.project} related={data.related} />;
}
