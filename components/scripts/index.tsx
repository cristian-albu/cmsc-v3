"use client";
import { E_GdprNames, useGdprContext } from "@/lib/contexts/GdprContext";
import Script from "next/script";

const Scripts = () => {
  const { gdprState } = useGdprContext();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {gdprState[E_GdprNames.analytics] && gaId && (
        <>
          <Script
            id="gaHead"
            async
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script
            id="gaBody"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "${gaId}");
`,
            }}
          />
        </>
      )}
    </>
  );
};

export default Scripts;
