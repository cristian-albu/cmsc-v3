"use client";
import React, { createContext, FC, ReactNode, useContext, useMemo, useState } from "react";

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
