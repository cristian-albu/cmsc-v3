"use client";
import React, { createContext, useContext, useState, FC, ReactNode, useEffect } from "react";

export type T_WindowContextValue = {
  resizeState: { width: number; height: number };
  clickTargetState: HTMLElement | null;
};

export type T_WindowContextProviderProps = {
  children: ReactNode;
};

const WindowContext = createContext<T_WindowContextValue | null>(null);

export const useWindowContext = (): T_WindowContextValue => {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error("useWindowContext must be used within a WindowContextProvider");
  }
  return context;
};

export const WindowContextProvider: FC<T_WindowContextProviderProps> = ({ children }) => {
  const [resizeState, setResizeState] = useState({
    width: 0,
    height: 0,
  });
  const [clickTargetState, setClickTargetState] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const resizeListener = () => setResizeState({ width: window.innerWidth, height: window.innerHeight });
    const clickListener = (event: MouseEvent) => setClickTargetState(event.target as HTMLElement);

    window.addEventListener("resize", resizeListener);
    window.addEventListener("click", clickListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
      window.removeEventListener("click", clickListener);
    };
  }, []);

  return <WindowContext.Provider value={{ resizeState, clickTargetState }}>{children}</WindowContext.Provider>;
};
