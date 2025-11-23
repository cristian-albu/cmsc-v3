"use client";

import { DonateSection } from "@/components/views";
import { CouncilSection, PartnersSection } from "@/app/_views/about-us";
import TeamSection from "@/app/_views/about-us/components/TeamSection";
import { ProjectsSection } from "@/app/_views/projects";
import { ResourcesSection } from "@/app/_views/resources";
import { FC } from "react";
import CtaSection from "../components/CtaSection";
import HeroSection from "../components/HeroSection";
import { T_HomeData } from "../types";
import { HelplinesSection } from "../components/HelplinesSection";

const HomePage: FC<{ data: T_HomeData }> = ({ data }) => {
  return (
    <>
      <HeroSection />
      <HelplinesSection />
      <ProjectsSection projects={data.projects} />
      <TeamSection team={data.team} />
      <CouncilSection council={data.team} />
      <PartnersSection partners={data.partners} />
      <ResourcesSection resources={data.resources} />
      <DonateSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
