import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link, { LinkProps } from "next/link";

type T_CommonProps = {
  children: ReactNode;
  className?: string;
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

const btnClass =
  "bg-black flex justify-center items-center gap-1 text-white px-3 py-2 rounded-lg transition-all hover:scale-[1.05] active:scale-[0.97]";

const Button: React.FC<Props> = ({ href, children, className, ...rest }) => {
  if (href) {
    const linkProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={`${btnClass} ${className || ""}`} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={`${btnClass} ${className || ""}`} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
