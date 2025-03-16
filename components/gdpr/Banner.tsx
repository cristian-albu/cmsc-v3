"use client";
import { T_GdprState, useGdprContext } from "@/lib/contexts/GdprContext";
import { useLangContext } from "@/lib/contexts/LangContext";
import React, { FC } from "react";
import { createPortal } from "react-dom";
import Button from "../button";
import Typography from "../typography";
import { acceptDefault, bannerData } from "./data";

const Banner: FC<{
  showBanner: boolean;
  body: HTMLElement | null;
  handleHideBanner: () => void;
  handleOpenSettings: () => void;
  saveCookieChoices: (state: T_GdprState) => void;
}> = ({ showBanner, body, handleHideBanner, handleOpenSettings, saveCookieChoices }) => {
  const { langState } = useLangContext();
  const { updateGdprState } = useGdprContext();

  const handleAcceptAll = () => {
    updateGdprState(acceptDefault);
    saveCookieChoices(acceptDefault);
    handleHideBanner();
  };

  return (
    <>
      {body &&
        showBanner &&
        createPortal(
          <div className="fixed w-3/4 bottom-0 left-[12.5%] bg-white py-5 px-8 shadow-2xl rounded-t-[1rem]">
            <div className="w-full flex flex-col gap-5">
              <Typography level={2}>{bannerData[langState].title}</Typography>
              <Typography>{bannerData[langState].description}</Typography>
              <div className="flex w-full justify-end gap-5 flex-wrap">
                <Button secondary onClick={handleOpenSettings}>
                  {bannerData[langState].openSettingsBtn}
                </Button>
                <Button onClick={handleAcceptAll}>{bannerData[langState].acceptAllBtn}</Button>
              </div>
            </div>
          </div>,
          body
        )}
    </>
  );
};

export default Banner;
