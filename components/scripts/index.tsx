"use client";
import { E_GdprNames, useGdprContext } from "@/lib/contexts/GdprContext";
import { useEffect } from "react";

const scriptsData = Object.freeze({
  gaHead: { id: "ga_head", data: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}` },
  gaBody: {
    id: "ga_body",
    data: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`,
  },
});

const Scripts = () => {
  const { gdprState } = useGdprContext();

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GA_ID) return;

    const insertedElements: Element[] = [];

    if (gdprState[E_GdprNames.analytics]) {
      if (!document.querySelector(`#${scriptsData.gaHead.id}`)) {
        const gaHead = document.createElement("script");
        gaHead.async = true;
        gaHead.src = scriptsData.gaHead.data;
        gaHead.id = scriptsData.gaHead.id;
        document.body.appendChild(gaHead);
        insertedElements.push(gaHead);
      }

      if (!document.querySelector(`#${scriptsData.gaBody.id}`)) {
        const gaBody = document.createElement("script");
        gaBody.id = scriptsData.gaBody.id;
        gaBody.textContent = scriptsData.gaBody.data;
        document.body.appendChild(gaBody);
        insertedElements.push(gaBody);
      }
    }

    return () => {
      insertedElements.forEach((el) => el?.remove());
    };
  }, [gdprState[E_GdprNames.analytics]]);

  return null;
};

export default Scripts;
