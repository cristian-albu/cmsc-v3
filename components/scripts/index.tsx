"use client";
import { E_GdprNames, useGdprContext } from "@/lib/contexts/GdprContext";
import { useEffect } from "react";

const GTM_HEAD = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`;

const GTM_BODY = `https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`;

const Scripts = () => {
  const { gdprState } = useGdprContext();

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GTM_ID) return;
    const gtmHeadElement = document.querySelector(`#gtm_head`);
    const gtmBodyElement = document.querySelector(`#gtm_body`);

    if (gdprState[E_GdprNames.analytics]) {
      if (!gtmHeadElement) {
        const gtmHead = document.createElement("script");
        gtmHead.id = "gtm_head";
        gtmHead.textContent = GTM_HEAD;
        document.head.appendChild(gtmHead);
      }

      if (!gtmBodyElement) {
        const gtmBody = document.createElement("noscript");
        gtmBody.id = "gtm_body";
        const gtmIFrame = document.createElement("iframe");
        gtmIFrame.src = GTM_BODY;
        gtmIFrame.height = "0";
        gtmIFrame.width = "0";
        gtmIFrame.setAttribute("style", "display:none;visibility:hidden");
        gtmBody.appendChild(gtmIFrame);
        document.body.appendChild(gtmBody);
      }
    } else {
      if (gtmHeadElement) {
        document.head.removeChild(gtmHeadElement);
      }
      if (gtmBodyElement) {
        document.body.removeChild(gtmBodyElement);
      }
    }
  }, [gdprState[E_GdprNames.analytics]]);

  return null;
};

export default Scripts;
