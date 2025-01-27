import { FC } from "react";
import { T_CardProps } from "./types";
import Image from "next/image";

const Card3: FC<T_CardProps> = ({ thumbnail, children, ...rest }) => {
  const { className, ...attributes } = rest;

  return (
    <div
      className={`bg-white shadow-lg px-5 pb-5 mt-[37px] mb-5 rounded-md flex flex-col justify-start items-center text-center ${
        className || ""
      }`}
      {...attributes}
    >
      <div className="w-[75px] h-[75px] mt-[-37px] flex flex-col justify-center items-center overflow-hidden rounded-full shadow-lg mb-3">
        <Image width={125} height={125} src={thumbnail} alt="" className="w-[75px] aspect-square object-cover" />
      </div>
      {children}
    </div>
  );
};

export default Card3;
