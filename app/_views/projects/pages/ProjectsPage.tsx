"use client";

import { Line, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { ERROR_MESSAGES } from "@/lib/info";
import { home_projectsData } from "@/app/_views/home/static";
import React, { FC } from "react";
import ProjectsList from "../components/ProjectsList";
import { T_ProjectsViews } from "../types";

const ProjectsPage: FC<T_ProjectsViews> = ({ data }) => {
  const { langState } = useLangContext();
  const projects = useLocalizedData(data.projectsProgramsCollection.items);
  const {
    [langState]: { heading, description },
  } = home_projectsData;

  const isProjectAvailable =
    Array.isArray(projects[langState]) && projects[langState].length !== 0;

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
          <div className="w-full flex flex-col">
            {!isProjectAvailable ? (
              <div>{ERROR_MESSAGES[langState].empty}</div>
            ) : (
              <>
                <ProjectsList projects={projects[langState]} />
              </>
            )}
          </div>
        </Wrapper>
      </Section>
    </>
  );
};

export default ProjectsPage;
