import React, { ReactNode, JSX, FC } from "react";

type T_Wrapper = {
  children: ReactNode;
  padding?: boolean;
} & JSX.IntrinsicElements["div"];

const Wrapper: FC<T_Wrapper> = ({ children, padding, ...rest }) => {
  const { className, ...attributes } = rest;
  return (
    <div
      className={`relative flex flex-col justify-center items-center max-w-[900px] w-[100%] 2xl:max-w-[1200px] ${
        padding ? "py-10" : ""
      } ${className || ""}`}
      {...attributes}
    >
      {children}
    </div>
  );
};

export default Wrapper;
