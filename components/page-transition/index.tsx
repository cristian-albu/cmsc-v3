"use client";
import { usePathname } from "next/navigation";
import React, { FC, ReactNode, useEffect } from "react";

type T_PageTransition = {
  children: ReactNode;
};

const PageTransition: FC<T_PageTransition> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("page-transition");
    const removeAnimation = () => document.documentElement.classList.remove("page-transition");
    const timeout = setTimeout(removeAnimation, 250);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return <>{children}</>;
};

export default PageTransition;
