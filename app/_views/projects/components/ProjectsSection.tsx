import { Button, Card, Line, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { ERROR_MESSAGES } from "@/lib/info";
import { E_PATHS } from "@/lib/paths";
import { home_projectsData } from "@/app/_views/home/static";
import { FC } from "react";
import { T_ProjectsSection } from "../types";

const ProjectsSection: FC<T_ProjectsSection> = ({ projects }) => {
  const { langState } = useLangContext();

  const {
    meta: { buttonLink },
    [langState]: { list, listTitle, heading, button, description },
  } = home_projectsData;

  const projectsData = useLocalizedData(
    projects?.projectsProgramsCollection.items
      .sort((a, b) => Date.parse(b.startDate) - Date.parse(a.startDate))
      .slice(0, 4)
  );

  return (
    <Section bg="gray">
      <Wrapper padding>
        <Typography level={1} heading={1}>
          {heading}
        </Typography>
        <Line />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full flex flex-col items-start">
            <Typography className="mb-5">{description}</Typography>
            <Typography level={3} heading={3}>
              {listTitle}
            </Typography>
            <ul className="list-disc pl-5 my-5">
              {list.map((item, i) => (
                <li key={i.toString()}>{item}</li>
              ))}
            </ul>

            <Button href={buttonLink}>{button}</Button>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10">
            {!Array.isArray(projectsData[langState]) ||
            projectsData[langState].length === 0 ? (
              <div>{ERROR_MESSAGES[langState].empty}</div>
            ) : (
              projectsData[langState].map((project) => (
                <Card
                  variation={2}
                  link
                  href={`${E_PATHS.PROJECTS}/${project.slug}`}
                  key={project.slug}
                  thumbnail={project.thumbnail.url}
                >
                  <Typography heading={3} level={4}>
                    {project.name}
                  </Typography>
                </Card>
              ))
            )}
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default ProjectsSection;
