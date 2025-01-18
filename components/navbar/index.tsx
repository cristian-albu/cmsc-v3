"use client";
import React, { useEffect, useRef, useState } from "react";
import { navbarData } from "./data";
import Link from "next/link";
import { useLangContext } from "@/lib/contexts/LangContext";
import { useWindowContext } from "@/lib/contexts/WindowContext";
import { E_LANG } from "@/lib/localization";

const RESPONSIVE_BREAKPOINT = 960;

const Navbar = () => {
  const [homeData, ...navData] = navbarData;
  const navRef = useRef<null | HTMLElement>(null);
  const { langState, updateLangState } = useLangContext();
  const { clickTargetState, resizeState } = useWindowContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLangClick = () => {
    updateLangState(langState === E_LANG.EN ? E_LANG.RO : E_LANG.EN);
  };

  useEffect(() => {
    if (clickTargetState && !navRef.current?.contains(clickTargetState)) {
      setIsMenuOpen(false);
    }
  }, [clickTargetState]);

  const isMobileWidth = resizeState.width < RESPONSIVE_BREAKPOINT;
  const isMenuStyled = isMenuOpen || !isMobileWidth;

  return (
    <nav
      ref={navRef}
      className="bg-black min-h-[60px] flex text-white w-full fixed top-0 left-0 z-[99] justify-between items-center"
    >
      <Link href={homeData.link}>{homeData[langState]}</Link>
      <ul
        className={
          isMobileWidth
            ? "absolute right-0 top-[60px] transition-all ease-in-out duration-300 flex flex-col bg-black p-5"
            : "flex w-full"
        }
        style={{ opacity: isMenuStyled ? 1 : 0, right: isMenuStyled ? "0px" : "-100vw" }}
      >
        {navData.map((item) => (
          <li key={item.link}>
            <Link href={item.link} onClick={() => setIsMenuOpen(false)}>
              {item[langState]}
            </Link>
          </li>
        ))}

        <li>
          <button onClick={handleLangClick}>{langState}</button>
        </li>
      </ul>
      {isMobileWidth && (
        <button className="btn relative z-[99]" onClick={handleMenuClick}>
          Menu
        </button>
      )}
    </nav>
  );
};

export default Navbar;
