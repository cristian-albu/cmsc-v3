"use client";

import React, { FC, ReactNode, useEffect, useState } from "react";
import { FaArrowRotateRight } from "react-icons/fa6";

const Loading: FC<{ children: ReactNode; waitTime?: number }> = ({ children, waitTime }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, waitTime || 150);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return loading ? (
    <div className="w-full flex justify-center items-center p-10 ">
      <FaArrowRotateRight className="text-2xl animate-spin" />
    </div>
  ) : (
    <div className={`w-full transition-all duration-200 ease-in-out ${loading ? "opacity-0" : "opacity-1"}`}>{children}</div>
  );
};

export default Loading;
