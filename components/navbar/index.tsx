"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { navbarData } from "./data";
import Link from "next/link";
import { useLangContext } from "@/lib/contexts/LangContext";
import { useWindowContext } from "@/lib/contexts/WindowContext";
import { E_LANG } from "@/lib/localization";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { usePathname } from "next/navigation";

const RESPONSIVE_BREAKPOINT = 960;

const Navbar: FC = () => {
  const [homeData, ...navData] = navbarData;
  const navRef = useRef<null | HTMLElement>(null);
  const { langState, updateLangState } = useLangContext();
  const { clickTargetState, resizeState } = useWindowContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
      className="bg-black max-w-[100vw] min-h-[60px] flex text-white w-full fixed top-0 left-0 z-[99] justify-between items-stretch"
    >
      <Link href={homeData.link} className="mr-auto flex flex-col justify-center items-center px-2">
        <Image width={180} height={60} src={"/cmsc_logo_white.svg"} alt={homeData[langState]} />
      </Link>
      <ul
        className={
          isMobileWidth
            ? "absolute right-0 top-[60px] transition-all ease-in-out duration-300 flex flex-col bg-black p-5 rounded-bl-2xl shadow-lg"
            : "flex w-full"
        }
        style={{ opacity: isMenuStyled ? 1 : 0, right: isMenuStyled ? "0px" : "-100vw" }}
      >
        {navData.map((item) => (
          <li key={item.link}>
            <Link
              href={item.link}
              onClick={() => setIsMenuOpen(false)}
              className={`${pathname === item.link ? "underline" : ""}`}
            >
              {item[langState]}
            </Link>
          </li>
        ))}
      </ul>

      {isMobileWidth && (
        <button className="relative z-[99] p-3" onClick={handleMenuClick}>
          <HiOutlineMenu className="text-2xl" />
        </button>
      )}

      <button className="p-3" onClick={handleLangClick}>
        {langState === E_LANG.EN ? (
          <Image src={"/ro_flag.svg"} width={30} height={15} alt="romanian flag" />
        ) : (
          <Image src={"/en_flag.svg"} width={30} height={15} alt="english flag" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
