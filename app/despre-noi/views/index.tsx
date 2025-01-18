"use client";
import { T_AboutView } from "@/app/despre-noi/page";
import React, { FC } from "react";

const AboutView: FC<T_AboutView> = ({ teamData, partnersData }) => {
  console.log(teamData, partnersData);
  return <div>AboutView</div>;
};

export default AboutView;
