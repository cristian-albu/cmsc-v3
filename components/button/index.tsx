import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link, { LinkProps } from "next/link";

type T_CommonProps = {
  children: ReactNode;
  className?: string;
  secondary?: boolean;
  tertiary?: boolean;
};

type T_ButtonProps = T_CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never; // If no `href`, it's a button
  };

type T_LinkButtonProps = T_CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & {
    href: string;
  };

type Props = T_ButtonProps | T_LinkButtonProps;

const button =
  "border-[1px] border-solid border-transparent flex justify-center items-center gap-1  px-3 py-2 rounded-lg transition-all enabled:hover:scale-[1.05] active:scale-[0.97] disabled:bg-gray-500 disabled:cursor-not-allowed";
const primaryStyle = "bg-black text-white";
const secondaryStyle = "bg-transparent border-[#000000] color-inherit";
const tertiaryStyle = "bg-transparent border-transparent color-inherit";

const Button: React.FC<Props> = ({ href, children, className, secondary, tertiary, ...rest }) => {
  if (href) {
    const linkProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link
        href={href}
        className={`${button} ${secondary ? secondaryStyle : tertiary ? tertiaryStyle : primaryStyle} ${className || ""}`}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      className={`${button} ${secondary ? secondaryStyle : tertiary ? tertiaryStyle : primaryStyle} ${className || ""}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
