"use client";

import { CompoundView, Line, Markdown, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { E_LANG } from "@/lib/localization";
import { formatLocalizedDate } from "@/lib/localization/formatLocalizedDate";
import { E_PATHS } from "@/lib/paths";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import ProjectsList from "../components/ProjectsList";
import { T_ProjectPageData } from "../types";

const backToProjects = {
  [E_LANG.EN]: "Back to projects",
  [E_LANG.RO]: "Înapoi la proiecte",
};

const relatedProjectsData = {
  [E_LANG.EN]: "Other projects",
  [E_LANG.RO]: "Alte proiecte",
};

const ProjectsTemplatePage: FC<T_ProjectPageData> = ({ project, related }) => {
  const { langState } = useLangContext();
  const projectData = useLocalizedData(project?.projectsProgramsCollection.items);
  const relatedData = useLocalizedData(related?.projectsProgramsCollection.items);

  const currProject = projectData[langState][0];
  const relatedProjects = relatedData[langState];

  return (
    <>
      <Section>
        <Wrapper className="mt-10">
          <div className="w-full mb-10">
            <Link href={E_PATHS.PROJECTS}>👈 {backToProjects[langState]}</Link>
          </div>
        </Wrapper>
      </Section>
      <CompoundView
        main={
          <>
            <Typography level={1} heading={1}>
              {currProject.name}
            </Typography>
            <Line />
            <div className="w-full flex">
              <Typography className="capitalize">{formatLocalizedDate(currProject.startDate, langState)}</Typography>
              {` - `}
              <Typography className="capitalize">{formatLocalizedDate(currProject.endDate, langState)}</Typography>
            </div>
          </>
        }
        aside={<Image src={currProject.thumbnail.url} alt="" width={300} height={400} className="shadow-lg rounded-md" />}
      />
      <Section bg="gray" wave="top" aria-label="decorative" role="div">
        <></>
      </Section>
      <CompoundView
        sectionProps={{ bg: "gray" }}
        main={<Markdown content={currProject.content} />}
        aside={
          <>
            <Typography level={3} heading={3}>
              {relatedProjectsData[langState]}
            </Typography>
            <Line />
            <ProjectsList projects={relatedProjects} />
          </>
        }
      />
    </>
  );
};

export default ProjectsTemplatePage;
