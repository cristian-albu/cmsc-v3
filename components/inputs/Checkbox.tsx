import React, { FC, JSX, ReactNode } from "react";

export type T_Checkbox = {
  children: ReactNode;
  labelProps?: JSX.IntrinsicElements["label"];
} & JSX.IntrinsicElements["input"];

const Checkbox: FC<T_Checkbox> = ({ children, labelProps = { className: "" }, ...inputProps }) => {
  const { className: labelClassName, ...restLabel } = labelProps;
  const { className: inputClassName, ...restInput } = inputProps;

  return (
    <label className={`flex gap-1 ${labelClassName ?? ""}`} {...restLabel}>
      <input
        type="checkbox"
        className={`cursor-pointer disabled:cursor-not-allowed ${inputClassName ?? ""}`}
        {...restInput}
      />
      {children}
    </label>
  );
};

export default Checkbox;
