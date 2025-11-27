"use client";
import React, { FC, KeyboardEvent, useEffect, useRef, useState } from "react";
import { navbarData } from "./data";
import Link from "next/link";
import { useLangContext } from "@/lib/contexts/LangContext";
import { useWindowContext } from "@/lib/contexts/WindowContext";
import { E_LANG } from "@/lib/localization";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { handleArrows, handleTabs } from "./utils";
import { home_assistanceData } from "@/app/_views/home/static";
import Typography from "../typography";
import { MdOutlineLocalPhone } from "react-icons/md";

const RESPONSIVE_BREAKPOINT = 960;

const Navbar: FC = () => {
  const [homeData, ...navData] = navbarData;
  const navRef = useRef<HTMLElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const langBtnRef = useRef<HTMLButtonElement>(null);
  const homeBtnRef = useRef<HTMLAnchorElement>(null);

  const { langState, updateLangState } = useLangContext();
  const { clickTargetState, resizeState } = useWindowContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const { greenPhone, urgentPhone } = home_assistanceData[langState];

  const isMobileWidth = resizeState.width < RESPONSIVE_BREAKPOINT;
  const isMenuStyled = isMenuOpen || !isMobileWidth;

  const handleLangClick = () => {
    updateLangState(langState === E_LANG.EN ? E_LANG.RO : E_LANG.EN);
  };

  const handleKeyboard = (event: KeyboardEvent<HTMLElement>) => {
    if (!document) return;

    if (event.key === "Escape") {
      homeBtnRef.current?.focus();
      setIsMenuOpen(false);
      return;
    }

    if (event.key === "Tab") {
      handleTabs(event, isMenuOpen, { menuBtnRef, langBtnRef });
    }

    if (isMenuOpen) {
      handleArrows(event, { homeBtnRef, langBtnRef });
    }
  };

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const isOutsideMenuClick =
      isMenuOpen &&
      clickTargetState &&
      clickTargetState !== menuBtnRef.current &&
      !navRef.current?.contains(clickTargetState);

    if (isOutsideMenuClick) {
      setIsMenuOpen(false);
    }
  }, [clickTargetState]);

  return (
    <>
      <nav
        ref={navRef}
        className="max-w-[100vw] min-h-[60px] flex flex-col w-full fixed top-0 left-0 z-[99]"
        onKeyDown={handleKeyboard}
      >
        <div className="bg-black text-white flex w-full h-[60px] justify-between items-stretch">
          <Link
            ref={homeBtnRef}
            href={homeData.link}
            className="mr-auto flex flex-col justify-center items-center px-2"
            onFocus={handleMenuClose}
          >
            <Image
              width={180}
              height={60}
              src={"/cmsc_logo_white.svg"}
              alt={homeData[langState]}
            />
          </Link>

          {isMobileWidth && (
            <button
              aria-label="Open and close the menu"
              ref={menuBtnRef}
              className="relative z-[99] p-3"
              onClick={handleMenuClick}
            >
              <HiOutlineMenu className="text-2xl" />
            </button>
          )}

          <ul
            className={
              isMobileWidth
                ? "absolute right-0 top-[60px] transition-all ease-in-out duration-300 flex flex-col bg-black p-5 rounded-bl-2xl shadow-lg"
                : "flex w-full items-center gap-4 justify-end"
            }
            style={{
              opacity: isMenuStyled ? 1 : 0,
              right: isMenuStyled ? "0px" : "-100vw",
            }}
          >
            {navData.map((item, index) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  onClick={handleMenuClose}
                  className={`${pathname === item.link ? "underline" : ""}`}
                  id={
                    index === navData.length - 1
                      ? "last"
                      : index === 0
                        ? "first"
                        : undefined
                  }
                >
                  {item[langState]}
                </Link>
              </li>
            ))}
          </ul>

          <button
            ref={langBtnRef}
            className="p-3"
            onClick={handleLangClick}
            onFocus={handleMenuClose}
          >
            {langState === E_LANG.EN ? (
              <Image
                src={"/ro_flag.svg"}
                width={30}
                height={15}
                alt="romanian flag"
              />
            ) : (
              <Image
                src={"/en_flag.svg"}
                width={30}
                height={15}
                alt="english flag"
              />
            )}
          </button>
        </div>
      </nav>
      <div className="w-full flex flex-wrap bg-white text-black px-3 py-1 shadow-lg">
        <Typography className="w-full md:w-[40%]">
          <MdOutlineLocalPhone className="text-lg text-pink" />
          {greenPhone}
        </Typography>
        <Typography className="w-full md:w-[60%]">
          <MdOutlineLocalPhone className="text-lg text-pink" />
          {urgentPhone}
        </Typography>
      </div>
    </>
  );
};

export default Navbar;
