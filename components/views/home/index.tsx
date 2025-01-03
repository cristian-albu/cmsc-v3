"use client";

import { useGdprContext } from "@/lib/contexts/GdprContext";
import { useLangContext } from "@/lib/contexts/LangContext";
import useFetcher from "@/lib/hooks/useData";
import { Project } from "@/lib/queries/projects";
import React, { FC } from "react";

const HomeView: FC<{ items: Project[] }> = ({ items }) => {
  const { data, error } = useFetcher(items);

  const { langState } = useLangContext();
  const { gdprState } = useGdprContext();

  console.log(data);

  return (
    <div>
      <button className="btn" onClick={() => console.log(data)}>
        See data
      </button>
    </div>
  );
};

export default HomeView;
