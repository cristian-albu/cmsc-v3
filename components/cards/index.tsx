import Link from "next/link";
import React, { FC } from "react";
import { T_Card } from "./types";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Card: FC<T_Card> = ({ variation = 1, link, href, children, ...rest }) => {
  const attributes = { ...rest, thumbnail: rest.thumbnail || "/placeholder_image.jpg" };

  const getCardComponent = () => {
    switch (variation) {
      case 1:
        return <Card1 {...attributes}>{children}</Card1>;
      case 2:
        return <Card2 {...attributes}>{children}</Card2>;
      case 3:
        return <Card3 {...attributes}>{children}</Card3>;
      default:
        return null;
    }
  };

  const cardComponent = getCardComponent();

  return link && href ? (
    <Link href={href} className="transition-all hover:scale-[1.02]">
      {cardComponent}
    </Link>
  ) : (
    cardComponent
  );
};

export default Card;
