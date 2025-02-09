import React, { FC, JSX, ReactNode } from "react";

export type T_TextInput = {
  children: ReactNode;
  labelProps?: JSX.IntrinsicElements["label"];
} & JSX.IntrinsicElements["input"];

const TextInput: FC<T_TextInput> = ({ children, labelProps = { className: "" }, ...inputProps }) => {
  const { className: labelClassName, ...restLabel } = labelProps;
  const { className: inputClassName, ...restInput } = inputProps;

  return (
    <label className={`w-full flex flex-col ${labelClassName ?? ""}`} {...restLabel}>
      {children}
      <input
        type={restInput.type === "email" ? "email" : "text"}
        className={`w-full outline-none border-solid border-black border-[1px] rounded-md px-3 py-1 transition-all hover:border-purple ${
          inputClassName ?? ""
        }`}
        {...restInput}
      />
    </label>
  );
};

export default TextInput;
