"use client";

import React, { FC } from "react";
import { T_HomeData } from "../data/queries/getHomeData";
import HeroSection from "./HeroSection";
import EventsSection from "./EventsSection";
import PartnersSection from "./PartnersSection";
import ProjectsSection from "./ProjectsSection";
import ResourcesSection from "./ResourcesSection";
import TeamSection from "./TeamSection";
import CouncilSection from "./CouncilSection";
import CtaSection from "./CtaSection";
import { DonateSection } from "@/components/views";

const HomeView: FC<{ data: T_HomeData }> = ({ data }) => {
  return (
    <>
      <HeroSection />
      <EventsSection events={data.events} />
      <PartnersSection partners={data.partners} />
      <ProjectsSection projects={data.projects} />
      <ResourcesSection resources={data.resources} />
      <TeamSection team={data.team} />
      <CouncilSection council={data.team} />
      <DonateSection />
      <CtaSection />
    </>
  );
};

export default HomeView;
