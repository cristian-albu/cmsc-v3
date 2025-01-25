"use client";

import Section from "@/components/section";
import React, { FC } from "react";
import { T_HomeData } from "../data/queries/getHomeData";
import HeroSection from "./HeroSection";
import EventsSection from "./EventsSection";
import PartnersSection from "./PartnersSection";
import ProjectsSection from "./ProjectsSection";
import ResourcesSection from "./ResourcesSection";

const HomeView: FC<{ data: T_HomeData }> = ({ data }) => {
  console.log(data);
  return (
    <>
      <HeroSection />
      <EventsSection events={data.events} />
      <PartnersSection partners={data.partners} />
      <ProjectsSection projects={data.projects} />
      <ResourcesSection resources={data.resources} />
      <TeamSection />
      <CouncilSection />
      <DonateSection />
      <CtaSection />
    </>
  );
};

export default HomeView;

const TeamSection = () => {
  return (
    <Section>
      <div></div>
    </Section>
  );
};

const CouncilSection = () => {
  return (
    <Section>
      <div></div>
    </Section>
  );
};

const CtaSection = () => {
  return (
    <Section>
      <div></div>
    </Section>
  );
};

const DonateSection = () => {
  return (
    <Section>
      <div></div>
    </Section>
  );
};
