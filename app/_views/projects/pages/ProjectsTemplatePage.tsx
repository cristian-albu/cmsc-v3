"use client";

import {
  Card,
  CompoundView,
  Line,
  Markdown,
  Section,
  Typography,
  Wrapper,
} from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { E_LANG } from "@/lib/localization";
import { formatLocalizedDate } from "@/lib/localization/formatLocalizedDate";
import { E_PATHS } from "@/lib/paths";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { T_ProjectPageData } from "../types";
import { ContactBar } from "@/components/navbar";

const backToProjects = {
  [E_LANG.EN]: "Back to projects",
  [E_LANG.RO]: "Înapoi la proiecte",
};

const relatedProjectsData = {
  [E_LANG.EN]: "Other projects",
  [E_LANG.RO]: "Alte proiecte",
};

const JUST_HER_PROJECT_SLUG = "justher-justitie-pentru-ea";

const JustHerSpecialCase: FC = () => {
  return (
    <>
      <div className="w-full fixed h-[80px] top-[60px] left-0 z-[99] flex bg-white p-1 shadow-lg">
        <Link
          href="https://anabi.just.ro/"
          rel="noopener noreferrer"
          target="_blank"
          className="w-full h-full flex justify-start"
        >
          <Image
            src={"/anabi_logo.png"}
            width={600}
            height={100}
            style={{ objectFit: "contain", height: "auto" }}
            alt="ANABI logo"
          />
        </Link>
      </div>
      <ContactBar className="top-[80px]" />
    </>
  );
};

const ProjectsTemplatePage: FC<T_ProjectPageData> = ({ project, related }) => {
  const { langState } = useLangContext();
  const projectData = useLocalizedData(
    project?.projectsProgramsCollection.items,
  );
  const relatedData = useLocalizedData(
    related?.projectsProgramsCollection.items,
  );

  const currProject = projectData[langState][0];
  const relatedProjects = relatedData[langState];

  const isJustForHerProject = currProject?.slug === JUST_HER_PROJECT_SLUG;

  return (
    <>
      {isJustForHerProject ? <JustHerSpecialCase /> : null}

      <Section className={isJustForHerProject ? "mt-[80px]" : ""}>
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
            {currProject.startDate && (
              <div className="w-full flex">
                <Typography className="capitalize">
                  {formatLocalizedDate(currProject.startDate, langState)}
                </Typography>
                {currProject.endDate && (
                  <>
                    -
                    <Typography className="capitalize">
                      {formatLocalizedDate(currProject.endDate, langState)}
                    </Typography>
                  </>
                )}
              </div>
            )}
          </>
        }
        aside={
          <Image
            src={currProject.thumbnail.url}
            alt=""
            width={300}
            height={400}
            className="shadow-lg rounded-md"
          />
        }
      />
      <Section bg="gray" wave="top" aria-label="decorative" role="div">
        <></>
      </Section>
      {currProject.content && (
        <CompoundView
          sectionProps={{ bg: "gray" }}
          main={<Markdown content={currProject.content} />}
          aside={
            <>
              <Typography level={3} heading={3}>
                {relatedProjectsData[langState]}
              </Typography>
              <Line />
              <div className="flex flex-col">
                {relatedProjects.map((project) => (
                  <Card
                    variation={2}
                    key={project.slug}
                    link
                    thumbnail={project.thumbnail.url}
                    href={project.slug}
                  >
                    <Typography>{project.name}</Typography>
                  </Card>
                ))}
              </div>
            </>
          }
        />
      )}
    </>
  );
};

export default ProjectsTemplatePage;
