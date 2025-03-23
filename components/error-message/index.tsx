import { useLangContext } from "@/lib/contexts/LangContext";
import { E_LANG } from "@/lib/localization";
import React, { FC, ReactNode } from "react";
import { MdError } from "react-icons/md";

const genericErrors = {
  [E_LANG.EN]: "An unexpected error has occurred. Please try again later.",
  [E_LANG.RO]: "A apărut o eroare neașteptată. Vă rugăm încercați mai târziu.",
};

const ErrorMessage: FC<{ children?: ReactNode }> = ({ children }) => {
  const { langState } = useLangContext();

  return (
    <div className="w-full flex flex-col items-center justify-center p-10 gap-5">
      <MdError className="text-3xl" />
      {children || genericErrors[langState]}
    </div>
  );
};

export default ErrorMessage;
