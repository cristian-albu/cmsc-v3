"use client";

import Section from "@/components/section";
import React, { FC } from "react";
import { T_HomeData } from "../data/queries/getHomeData";
import HeroSection from "./HeroSection";
import EventsSection from "./EventsSection";
import PartnersSection from "./PartnersSection";

const HomeView: FC<{ data: T_HomeData }> = ({ data }) => {
  console.log(data);
  return (
    <>
      <HeroSection />
      <EventsSection events={data.events} />
      <PartnersSection partners={data.partners} />
      <ProjectsSection />
      <ResourcesSection />
      <TeamSection />
      <CouncilSection />
      <DonateSection />
      <CtaSection />
    </>
  );
};

export default HomeView;

const ProjectsSection = () => {
  return (
    <Section>
      <div></div>
    </Section>
  );
};

const ResourcesSection = () => {
  return (
    <Section>
      <div></div>
    </Section>
  );
};

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
