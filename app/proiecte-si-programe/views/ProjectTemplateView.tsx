"use client";

import React, { FC } from "react";
import { T_BaseLocalizedProject, T_ExtendedLocalidedProject } from "../data/queries/utils";
import { useLangContext } from "@/lib/contexts/LangContext";
import { Section, Typography, Wrapper } from "@/components";

type T_ProjectsViews = {
  project: T_ExtendedLocalidedProject;
  related: T_BaseLocalizedProject[];
};

const ProjectTemplateView: FC<T_ProjectsViews> = ({ project, related }) => {
  const { langState } = useLangContext();

  return (
    <Section>
      <Wrapper padding>
        <Typography level={1} heading={1}>
          h
        </Typography>
      </Wrapper>
    </Section>
  );
};

export default ProjectTemplateView;
