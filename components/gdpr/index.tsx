"use client";
import { useLangContext } from "@/lib/contexts/LangContext";
import React from "react";
import Button from "../button";
import Banner from "./Banner";
import { bannerData } from "./data";
import Settings from "./Settings";
import useGdpr from "./useGdpr";

const GdprComponent = () => {
  const { langState } = useLangContext();
  const {
    body,
    isBannerOpen,
    isSettingsOpen,
    handleOpenSettings,
    handleCloseSettings,
    handleHideBanner,
    handleOpenSettingsFromBanner,
    saveCookieChoices,
  } = useGdpr();
  return (
    <div>
      <div className="fixed bottom-0 left-0 w-full flex p-5">
        <Button onClick={handleOpenSettings} aria-label={bannerData[langState].openSettingsBtn}>
          🍪
        </Button>
      </div>

      <Banner
        showBanner={isBannerOpen}
        body={body}
        handleHideBanner={handleHideBanner}
        handleOpenSettings={handleOpenSettingsFromBanner}
        saveCookieChoices={saveCookieChoices}
      />
      <Settings
        showModal={isSettingsOpen}
        body={body}
        handleCloseModal={handleCloseSettings}
        saveCookieChoices={saveCookieChoices}
      />
    </div>
  );
};

export default GdprComponent;
