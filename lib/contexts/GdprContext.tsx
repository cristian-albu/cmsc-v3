"use client";
import React, { createContext, FC, ReactNode, useContext, useMemo, useState } from "react";
import { E_LANG } from "../localization";

export enum E_GdprNames {
  essential = "essential",
  preferences = "preferences",
  analytics = "analytics",
  advertisement = "advertisement",
}

export type T_GdprState = {
  [E_GdprNames.essential]: boolean;
  [E_GdprNames.preferences]: boolean;
  [E_GdprNames.analytics]: boolean;
  [E_GdprNames.advertisement]: boolean;
};

export type T_GdprContextValue = {
  gdprState: T_GdprState;
  updateGdprState: (newState: T_GdprState) => void;
};

export type T_GdprContextProviderProps = {
  children: ReactNode;
};

export const defaultMessages = {
  [E_GdprNames.essential]: { [E_LANG.EN]: "", [E_LANG.RO]: "" },
  [E_GdprNames.preferences]: {
    [E_LANG.EN]:
      "You need to enable 'preferences' cookies to be able to see this. You can modify them with the button 🍪 on the bottom left.",
    [E_LANG.RO]:
      "Trebuie să activați cookie-urile pentru 'preferințe' pentru a putea vedea acest conținut. Puteți să le modificați cu butonul 🍪 din stânga jos.",
  },
  [E_GdprNames.analytics]: { [E_LANG.EN]: "", [E_LANG.RO]: "" },
  [E_GdprNames.advertisement]: { [E_LANG.EN]: "", [E_LANG.RO]: "" },
};

const GdprContext = createContext<null | T_GdprContextValue>(null);

export const useGdprContext = (): T_GdprContextValue => {
  const context = useContext(GdprContext);
  if (!context) {
    throw new Error("useGdprContext must be used within a GdprContextProvider");
  }
  return context;
};

export const GdprContextProvider: FC<T_GdprContextProviderProps> = ({ children }) => {
  const [gdprState, updateGdprState] = useState<T_GdprState>({
    [E_GdprNames.essential]: true,
    [E_GdprNames.preferences]: false,
    [E_GdprNames.analytics]: false,
    [E_GdprNames.advertisement]: false,
  });

  const value = useMemo(
    () => ({
      gdprState,
      updateGdprState: (newState: T_GdprState) => updateGdprState(newState),
    }),
    [gdprState]
  );

  return <GdprContext.Provider value={value}>{children}</GdprContext.Provider>;
};
