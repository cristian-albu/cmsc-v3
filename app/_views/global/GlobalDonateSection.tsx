"use client";

import { DonateSection } from "@/components/views";
import { E_PATHS } from "@/lib/paths";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

const GlobalDonateSection: FC = () => {
  const pathname = usePathname();

  return pathname === "/" || pathname.includes(E_PATHS.EMOTIONAL_TREASURE_BOX) ? <></> : <DonateSection bottom={true} />;
};

export default GlobalDonateSection;
