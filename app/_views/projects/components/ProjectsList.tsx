import { Card, Typography } from "@/components";
import { E_PATHS } from "@/lib/paths";
import { FC } from "react";
import { T_BaseProject } from "../queries/utils";

const ProjectsList: FC<{ projects: T_BaseProject[] }> = ({ projects }) => {
  return (
    <div className="w-full flex flex-col">
      {projects.map((project) => (
        <Card
          key={project.slug}
          variation={2}
          link
          href={`${E_PATHS.PROJECTS}/${project.slug}`}
          thumbnail={project.thumbnail.url}
        >
          <Typography>{project.name}</Typography>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsList;
