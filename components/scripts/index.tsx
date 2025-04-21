"use client";
import { E_GdprNames, useGdprContext } from "@/lib/contexts/GdprContext";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const Scripts = () => {
  const { gdprState } = useGdprContext();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

  return (
    <>
      {gdprState[E_GdprNames.analytics] && gaId && (
        <>
          <GoogleAnalytics gaId={gaId} />
          <GoogleTagManager gtmId={gtmId} />
        </>
      )}
    </>
  );
};

export default Scripts;
