import { createElement, FC, JSX, ReactNode } from "react";

type T_Typography = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  heading?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
} & JSX.IntrinsicElements["p"];

const titleStyles = {
  1: "text-4xl md:text-5xl mb-5",
  2: "text-2xl mb-2",
  3: "text-xl",
  4: "text-lg",
  5: "text-md",
  6: "text-sm",
};

const Typography: FC<T_Typography> = ({ level = 5, children, heading, ...rest }) => {
  const { className, ...attributes } = rest;

  if (heading) {
    return createElement(`h${heading}`, { className: `${titleStyles[level]} ${className || ""}`, ...attributes }, children);
  } else {
    return createElement("p", { className: `${titleStyles[level]} ${className || ""}`, ...attributes }, children);
  }
};

export default Typography;
