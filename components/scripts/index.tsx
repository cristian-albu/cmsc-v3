"use client";
import { E_GdprNames, useGdprContext } from "@/lib/contexts/GdprContext";
import { GoogleAnalytics } from "@next/third-parties/google";

const Scripts = () => {
  const { gdprState } = useGdprContext();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return <>{gdprState[E_GdprNames.analytics] && gaId && <GoogleAnalytics gaId={gaId} />}</>;
};

export default Scripts;
