import { Card, Typography } from "@/components";
import { E_PATHS } from "@/lib/paths";
import { FC } from "react";
import { T_BaseProject } from "../queries/utils";
import { formatLocalizedDate } from "@/lib/localization/formatLocalizedDate";
import { useLangContext } from "@/lib/contexts/LangContext";

const ProjectsList: FC<{ projects: T_BaseProject[] }> = ({ projects }) => {
  const { langState } = useLangContext();

  return (
    <div className="w-full flex flex-col">
      {projects
        .sort((a, b) => Date.parse(b.startDate) - Date.parse(a.startDate))
        .map((project) => (
          <Card
            key={project.slug}
            variation={4}
            link
            href={`${E_PATHS.PROJECTS}/${project.slug}`}
            thumbnail={project.thumbnail.url}
          >
            <Typography heading={3} level={2}>
              {project.name}
            </Typography>

            <Typography className="mb-3 capitalize">
              {formatLocalizedDate(project.startDate, langState)}
              {project.endDate &&
                ` - ${formatLocalizedDate(project.endDate, langState)}`}
            </Typography>

            <Typography>{project.summary}</Typography>
          </Card>
        ))}
    </div>
  );
};

export default ProjectsList;
