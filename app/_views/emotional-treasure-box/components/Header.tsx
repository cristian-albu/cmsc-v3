"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center p-2 border-b-solid border-[1px] border-gray gap-3">
      <Link href="https://eeagrants.org/" target="blank" className="mr-auto" aria-label="eeagrants organization website">
        <Image
          src={"/etb/iln_logo.png"}
          width={200}
          height={100}
          alt="logo ILN"
          className="w-auto h-[55px] md:h-[75px] object-contain"
        />
      </Link>
      <Link href="https://www.cultura.ro/" target="blank" aria-label="romanian ministry of culture website">
        <Image
          src={"/etb/ministerul_culturii_logo.png"}
          width={250}
          height={100}
          alt="logo ministerul culturii"
          className="w-auto h-[55px] md:h-[75px] object-contain"
        />
      </Link>
      <Link href="https://www.umpcultura.ro/" target="blank" aria-label="umpcultura website">
        <Image
          src={"/etb/logo_ump.png"}
          width={250}
          height={100}
          alt="logo UMP"
          className="w-auto h-[55px] md:h-[75px] object-contain"
        />
      </Link>
    </div>
  );
};

export default Header;
