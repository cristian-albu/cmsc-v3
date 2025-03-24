"use client";

import { DonateSection } from "@/components/views";
import { CouncilSection, PartnersSection } from "@/app/_views/about-us";
import TeamSection from "@/app/_views/about-us/components/TeamSection";
import { EventsSection } from "@/app/_views/events";
import { ProjectsSection } from "@/app/_views/projects";
import { ResourcesSection } from "@/app/_views/resources";
import { FC } from "react";
import CtaSection from "../components/CtaSection";
import HeroSection from "../components/HeroSection";
import { T_HomeData } from "../types";

const HomePage: FC<{ data: T_HomeData }> = ({ data }) => {
  return (
    <>
      <HeroSection />
      <EventsSection events={data.events} numberOfEvents={2} />
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

export default HomePage;
