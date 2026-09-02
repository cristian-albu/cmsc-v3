"use client";
import { E_GdprNames, useGdprContext } from "@/lib/contexts/GdprContext";
import { deleteCookiesByPrefix } from "@/lib/utils/cookies";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { useEffect } from "react";

const Scripts = () => {
  const { gdprState } = useGdprContext();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";
  const hasAnalyticsConsent = gdprState[E_GdprNames.analytics];

  useEffect(() => {
    if (!gaId) return;
    const disableKey = `ga-disable-${gaId}`;
    const windowWithGaFlag = window as unknown as Record<string, boolean>;

    if (hasAnalyticsConsent) {
      windowWithGaFlag[disableKey] = false;
      return;
    }

    windowWithGaFlag[disableKey] = true;
    deleteCookiesByPrefix("_ga");

    const resweep = () => deleteCookiesByPrefix("_ga");
    const timeoutId = setTimeout(resweep, 1000);
    window.addEventListener("pageshow", resweep);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("pageshow", resweep);
    };
  }, [hasAnalyticsConsent, gaId]);

  return (
    <>
      {hasAnalyticsConsent && gaId && (
        <>
          <GoogleAnalytics gaId={gaId} />
          <GoogleTagManager gtmId={gtmId} />
        </>
      )}
    </>
  );
};

export default Scripts;
