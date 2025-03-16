"use client";

import React, { FC } from "react";
import { T_AboutView } from "../types";

const AboutPage: FC<T_AboutView> = ({ teamData, partnersData }) => {
  console.log(teamData, partnersData);
  return <div>AboutView</div>;
};

export default AboutPage;
