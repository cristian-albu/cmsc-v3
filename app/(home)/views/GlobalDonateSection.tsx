"use client";

import { DonateSection } from "@/components/views";
import { usePathname } from "next/navigation";
import React from "react";

const GlobalDonateSection = () => {
  const pathname = usePathname();

  return pathname === "/" ? <></> : <DonateSection bottom={true} />;
};

export default GlobalDonateSection;
