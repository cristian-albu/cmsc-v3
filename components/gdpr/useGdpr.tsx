"use client";
import { E_GdprNames, T_GdprState, useGdprContext } from "@/lib/contexts/GdprContext";
import Cookies from "@/lib/utils/cookies";
import { useEffect, useState } from "react";

const COOKIE_NAME = "CMSC_GDPR";

const useGdpr = () => {
  const gdprCookie = new Cookies(COOKIE_NAME);
  const { updateGdprState } = useGdprContext();

  const [body, setBody] = useState<HTMLElement | null>(null);
  const [isBannerOpen, setBannerOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const handleOpenSettings = () => {
    setSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setSettingsOpen(false);
  };

  const handleShowBanner = () => {
    setBannerOpen(true);
  };

  const handleHideBanner = () => {
    setBannerOpen(false);
  };

  const handleOpenSettingsFromBanner = () => {
    handleHideBanner();
    handleOpenSettings();
  };

  const saveCookieChoices = (gdprState: T_GdprState) => {
    gdprCookie.setCookie(JSON.stringify(gdprState));
  };

  const getValidCookieData = (value: string) => {
    const cookieData: T_GdprState = JSON.parse(decodeURIComponent(value));

    if (typeof cookieData !== "object") return null;

    const values = [
      cookieData[E_GdprNames.essential],
      cookieData[E_GdprNames.preferences],
      cookieData[E_GdprNames.analytics],
      cookieData[E_GdprNames.advertisement],
    ];

    values.forEach((val) => {
      if (!val || typeof val !== "boolean") return null;
    });

    return cookieData;
  };

  useEffect(() => {
    const currentCookieData = gdprCookie.getCookie();

    if (!currentCookieData) {
      handleShowBanner();
    } else {
      const cookieData = getValidCookieData(currentCookieData);

      if (cookieData) {
        updateGdprState(cookieData);
      }
    }

    setBody(document.body);
  }, []);

  return {
    body,
    isBannerOpen,
    isSettingsOpen,
    handleOpenSettings,
    handleCloseSettings,
    handleShowBanner,
    handleHideBanner,
    handleOpenSettingsFromBanner,
    saveCookieChoices,
  };
};

export default useGdpr;
