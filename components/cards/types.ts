import { ReactNode, JSX } from "react";

export type T_LinkCard = {
  link: true;
  href: string;
};

export type T_CardProps = {
  thumbnail: string;
  children: ReactNode;
} & JSX.IntrinsicElements["div"];

export type T_Card = {
  variation?: 1 | 2 | 3 | 4;
} & T_CardProps &
  ({ link?: false; href?: undefined } | T_LinkCard);
