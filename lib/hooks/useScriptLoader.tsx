"use client";
import { useEffect } from "react";
import { isValidUrl } from "../utils/isValidUrl";

type T_ScriptSrc = {
  name: string;
  src: string;
  body?: string;
};

const useScriptLoader = (scripts: T_ScriptSrc[]) => {
  useEffect(() => {
    const head = document.head;
    const scriptElements: HTMLScriptElement[] = [];

    scripts.forEach((script) => {
      if (!isValidUrl(script.src)) return;
      const existingElement = head.querySelector<HTMLScriptElement>(`#${script.name}`);

      if (!existingElement) {
        const element = document.createElement("script");
        element.id = script.name;
        element.src = script.src;
        element.async = true;
        if (script.body) element.innerText = script.body;
        head.appendChild(element);
        scriptElements.push(element);
      }
    });

    return () => {
      scriptElements.forEach((element) => {
        head.removeChild(element);
      });
    };
  }, [scripts]);

  return null;
};

export default useScriptLoader;
