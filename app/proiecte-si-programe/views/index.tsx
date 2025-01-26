"use client";
import React, { FC } from "react";
import { useLangContext } from "@/lib/contexts/LangContext";
import useFetcher from "@/lib/hooks/useFetcher";
import { T_BaseLocalizedProject, T_BaseProject } from "@/app/proiecte-si-programe/data/queries/utils";
import { enDataListConverter } from "@/lib/utils";

const ProjectsView: FC<{ items: T_BaseLocalizedProject[] }> = ({ items }) => {
  const { data } = useFetcher(items);
  const dataLang = enDataListConverter<T_BaseProject>(data);
  const { langState } = useLangContext();

  return (
    <div>
      <button className="btn" onClick={() => console.log(data)}>
        See data
      </button>

      <div>
        {dataLang.map((item) => {
          const curr = item[langState];

          return <div key={curr.name}>{curr.name}</div>;
        })}
      </div>
    </div>
  );
};

export default ProjectsView;
