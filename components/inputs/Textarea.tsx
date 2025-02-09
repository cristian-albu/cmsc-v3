import React, { FC, JSX, ReactNode } from "react";

export type T_Textarea = {
  children: ReactNode;
  labelProps?: JSX.IntrinsicElements["label"];
} & JSX.IntrinsicElements["textarea"];

const Textarea: FC<T_Textarea> = ({ children, labelProps = { className: "" }, ...inputProps }) => {
  const { className: labelClassName, ...restLabel } = labelProps;
  const { className: inputClassName, ...restInput } = inputProps;

  return (
    <label className={`w-full flex flex-col ${labelClassName ?? ""}`} {...restLabel}>
      {children}
      <textarea
        className={`w-full max-w-full h-full min-h-[120px] max-h-[120px] outline-none border-solid border-black border-[1px] rounded-md px-3 py-1 transition-all   ${
          inputClassName ?? ""
        }`}
        {...restInput}
      />
    </label>
  );
};

export default Textarea;
