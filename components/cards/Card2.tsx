import Image from "next/image";
import { T_CardProps } from "./types";
import { FC } from "react";

const Card2: FC<T_CardProps> = ({ thumbnail, children, ...rest }) => {
  const { className, ...attributes } = rest;

  return (
    <div className={`w-full shadow-lg bg-white rounded-md p-5 mt-[4rem] ${className || ""}`} {...attributes}>
      <div className="w-full mt-[-4rem]">
        <Image width={400} height={300} src={thumbnail} alt={``} className="rounded-md mb-5 shadow-lg" />
      </div>
      {children}
    </div>
  );
};

export default Card2;
