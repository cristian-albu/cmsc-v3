"use client";

import { DonateSection } from "@/components/views";
import { E_PATHS } from "@/lib/paths";
import { usePathname } from "next/navigation";
import React from "react";

const GlobalDonateSection = () => {
  const pathname = usePathname();

  return pathname === "/" || pathname.includes(E_PATHS.EMOTIONAL_TREASURE_BOX) ? <></> : <DonateSection bottom={true} />;
};

export default GlobalDonateSection;
