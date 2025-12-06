import Image from "next/image";
import { T_CardProps } from "./types";
import { FC } from "react";

const Card4: FC<T_CardProps> = ({ thumbnail, children, ...rest }) => {
  const { className, ...attributes } = rest;

  return (
    <div
      className="w-full flex mb-10 gap-5 flex-wrap md:flex-nowrap"
      {...attributes}
    >
      <div className="w-full md:min-w-[30%]">
        <Image
          width={300}
          height={300}
          src={thumbnail}
          alt={``}
          className="rounded-md "
        />
      </div>
      <div
        className={`w-full md:min-w-[70%] flex flex-col gap-5 items-start ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Card4;
