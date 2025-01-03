"use client";
import React, { createContext, useContext, useState, useMemo, FC, ReactNode } from "react";

export enum E_LANG {
  RO = "ro",
  EN = "en",
}

export type T_LangContextValue = {
  langState: E_LANG;
  updateLangState: (newState: E_LANG) => void;
};

export type T_LangContextProviderProps = {
  children: ReactNode;
};

const LangContext = createContext<null | T_LangContextValue>(null);

export const useLangContext = (): T_LangContextValue => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export const LangContextProvider: FC<T_LangContextProviderProps> = ({ children }) => {
  const [langState, updateLangState] = useState(E_LANG.RO);

  const value = useMemo(
    () => ({
      langState,
      updateLangState: (newState: E_LANG) => updateLangState(newState),
    }),
    [langState]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};
