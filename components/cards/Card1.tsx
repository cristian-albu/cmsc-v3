import Image from "next/image";
import { T_CardProps } from "./types";
import { FC } from "react";

const Card1: FC<T_CardProps> = ({ thumbnail, children, ...rest }) => {
  const { className, ...attributes } = rest;

  return (
    <div className={`w-full mb-5 flex ${className || ""}`} {...attributes}>
      <div className="w-1/3">
        <Image width={300} height={300} src={thumbnail} alt={``} className="rounded-md" />
      </div>
      <div className="w-2/3 px-3 flex flex-col justify-start">{children}</div>
    </div>
  );
};

export default Card1;
