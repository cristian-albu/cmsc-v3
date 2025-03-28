import { FC, JSX, ReactNode } from "react";

type T_WaveType = "bottom" | "top" | "bottomDark" | "tip";
type T_Bg = "color" | "light" | "dark" | "gray";

export type T_SectionProps = {
  wave?: T_WaveType;
  bg?: T_Bg;
} & JSX.IntrinsicElements["section"];

type T_Section = {
  children?: ReactNode;
} & T_SectionProps;

const colorClasses: Record<T_Bg, string> = {
  color: "bg-gradient-to-tr from-darkPurple to-pink text-[#ffffff]",
  dark: "bg-[#1e1527] text-[#ffffff]",
  light: "bg-[#ffffff] text-dark",
  gray: "bg-[#f7f7f7] text-dark",
};

const waveClasses: Record<T_WaveType, string> = {
  bottom: "relative bottom-[-2px] bg-[url('/waves/wave_bottom.svg')] bg-repeat-x bg-bottom bg-contain h-[8rem]",
  bottomDark:
    "relative bottom-[-2px] inverse bg-[url('/waves/wave_bottom_dark.svg')] bg-repeat-x bg-bottom bg-contain h-[8rem]",
  top: "relative top-[-2px] bg-[url('/waves/wave_top.svg')] bg-repeat-x bg-top bg-contain h-[8rem]",
  tip: "absolute z-[0] top-[-2px] bg-[url('/waves/wave_top.svg')] bg-repeat-x bg-top bg-contain h-[8rem]",
};

export const Section: FC<T_Section> = ({ children, wave, bg = "light", ...rest }) => {
  const { className, ...attributes } = rest;

  return (
    <section
      className={`relative max-w-full flex flex-col px-10 justify-between items-center w-full overflow-hidden 
        ${bg === "color" ? colorClasses.color : ""}
        ${bg === "dark" ? colorClasses.dark : ""}
        ${bg === "light" ? colorClasses.light : ""}
        ${bg === "gray" ? colorClasses.gray : ""} ${className || ""}`
        .trim()
        .replace(/\s+/g, " ")}
      {...attributes}
    >
      <div></div>
      {children}
      {wave && (
        <div
          className={`w-[102vw] left-[-1vw] ${wave === "bottom" ? waveClasses.bottom : ""}${
            wave === "bottomDark" ? waveClasses.bottomDark : ""
          }${wave === "top" ? waveClasses.top : ""}${wave === "tip" ? waveClasses.tip : ""}
        `}
        />
      )}
    </section>
  );
};

export default Section;
