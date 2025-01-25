import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactNode, JSX } from "react";

type T_LinkCard = {
  link: true;
  href: string;
};

type T_CardProps = {
  thumbnail: string;
  children: ReactNode;
} & JSX.IntrinsicElements["div"];

type T_Card = {
  variation?: 1 | 2 | 3;
} & T_CardProps &
  ({ link?: false; href?: undefined } | T_LinkCard);

const Card: FC<T_Card> = ({ variation = 1, link, href, children, ...rest }) => {
  const getCardComponent = () => {
    switch (variation) {
      case 1:
        return <Card1 {...rest}>{children}</Card1>;
      case 2:
        return <Card2 {...rest}>{children}</Card2>;
      case 3:
        return <Card3 {...rest}>{children}</Card3>;
      default:
        return null;
    }
  };

  const cardComponent = getCardComponent();

  return link && href ? <Link href={href}>{cardComponent}</Link> : cardComponent;
};

export default Card;

const Card1: FC<T_CardProps> = ({ thumbnail, children, ...rest }) => {
  const { className, ...attributes } = rest;

  return (
    <div className={`w-full mb-5 flex ${className || ""}`} {...attributes}>
      <div className="w-1/3">
        <Image width={300} height={300} src={thumbnail} alt={``} className="rounded-md" />
      </div>
      <div className="w-2/3 px-3 flex flex-col justify-start">{children}</div>
    </div>
  );
};

const Card2: FC<T_CardProps> = ({ thumbnail, children, ...rest }) => {
  const { className, ...attributes } = rest;

  return (
    <div className={`${className || ""}`} {...attributes}>
      {children}
    </div>
  );
};

const Card3: FC<T_CardProps> = ({ thumbnail, children, ...rest }) => {
  const { className, ...attributes } = rest;

  return (
    <div className={`${className || ""}`} {...attributes}>
      {children}
    </div>
  );
};
