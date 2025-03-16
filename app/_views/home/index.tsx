import type { T_HomeData } from "./types";

import CtaSection from "./components/CtaSection";
import HeroSection from "./components/HeroSection";
import HomePage from "./pages/HomePage";
import getHomeData from "./queries/getHomeData";

export { CtaSection, getHomeData, HeroSection, HomePage };

export type { T_HomeData };
