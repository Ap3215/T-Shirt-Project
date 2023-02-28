import React from "react";

import Section from "../../ui/section";
import IconButton from "../../ui/iconbutton";
import { attachClasses } from "../../../utils/index";

import classes from "./index.module.css";

const shopCards = [
  {
    image: "/Images/mbr-1.jpg",
    title: "t-shirt with print",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies metus et nibh gravida, eu imperdiet ante egestas.Duis ornare lobortis ante, eget eleifend sapien dictum ut.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    price: "$29",
  },
  {
    image: "/Images/mbr (1).jpeg",
    title: "t-shirt with slogan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies metus et nibh gravida, eu imperdiet ante egestas.Duis ornare lobortis ante, eget eleifend sapien dictum ut.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    price: "$49",
  },
];

const ShopCards = () => {
  return (
    <Section width="all" background="primary">
      {shopCards.map((shop, index) => (
        <div className={attachClasses(classes["shop-card"])} key={index}>
          <img
            className={attachClasses(classes["shop-card__image"])}
            src={shop.image}
            alt="guys standing in pose"
          />
          <div className={attachClasses(classes["shop-card__content"])}>
            <div className={attachClasses(classes["shop-card__content_box"])}>
              <h4 className={attachClasses(classes["shop-card__title"])}>
                {shop.title}
              </h4>
              <p className={attachClasses(classes["shop-card__text"])}>
                {shop.description}
              </p>
            </div>
            <div className={attachClasses(classes["shop-card__button"])}>
              <p className={attachClasses(classes["button__price"])}>
                {shop.price}
              </p>
              <IconButton card="buy now" />
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default ShopCards;
