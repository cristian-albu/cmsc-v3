"use client";

import React, { FC, ReactNode, useState } from "react";

type T_Tooltip = {
  children: ReactNode;
  text: string;
};

const Tooltip: FC<T_Tooltip> = ({ children, text }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsTooltipVisible(true)} onMouseLeave={() => setIsTooltipVisible(false)}>
      {children}
      {isTooltipVisible && (
        <div className="w-full p-3 text-sm rounded-md absolute bottom-[1.5rem] right-[-1rem] bg-dark">{text}</div>
      )}
    </div>
  );
};

export default Tooltip;
