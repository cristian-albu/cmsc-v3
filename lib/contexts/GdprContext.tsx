"use client";
import React, { createContext, useContext, useState, useMemo, FC, ReactNode } from "react";

export type T_GdprState = {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  advertisement: boolean;
  third_party: boolean;
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
  const [gdprState, updateGdprState] = useState({
    essential: true,
    functional: false,
    analytics: false,
    advertisement: false,
    third_party: false,
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
