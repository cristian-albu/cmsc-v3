"use client";

import { useLangContext } from "@/lib/contexts/LangContext";
import React, { FC } from "react";
import { Line, Section, Typography, Wrapper } from "@/components";
import { T_ProjectsRequest } from "../page";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { ERROR_MESSAGES } from "@/lib/info";
import { home_projectsData } from "@/app/(home)/data/static";
import ProjectsList from "./ProjectsList";

type T_ProjectsViews = {
  data: T_ProjectsRequest;
};

const ProjectsView: FC<T_ProjectsViews> = ({ data }) => {
  const { langState } = useLangContext();
  const projects = useLocalizedData(data.projectsProgramsCollection.items);
  const {
    [langState]: { heading, description },
  } = home_projectsData;

  const isProjectAvailable = Array.isArray(projects[langState]) && projects[langState].length !== 0;
  const projectSplitIndex = Math.round(projects[langState].length / 3);

  const projectColumns =
    projects[langState].length >= 3
      ? [
          projects[langState].slice(0, projectSplitIndex),
          projects[langState].slice(projectSplitIndex, projectSplitIndex * 2),
          projects[langState].slice(projectSplitIndex * 2),
        ]
      : [];

  return (
    <>
      <Section>
        <Wrapper padding>
          <Typography level={1} heading={1}>
            {heading}
          </Typography>
          <Line />
          <Typography>{description}</Typography>
        </Wrapper>
      </Section>
      <Section aria-label="decorative" role="div" bg="gray" wave="top">
        <></>
      </Section>
      <Section bg="gray" wave="bottom">
        <Wrapper>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
            {!isProjectAvailable ? (
              <div>{ERROR_MESSAGES[langState].empty}</div>
            ) : (
              <>
                {projectColumns.length > 0 ? (
                  projectColumns.map((col, index) => <ProjectsList key={index.toString()} projects={col} />)
                ) : (
                  <ProjectsList projects={projects[langState]} />
                )}
              </>
            )}
          </div>
        </Wrapper>
      </Section>
    </>
  );
};

export default ProjectsView;
