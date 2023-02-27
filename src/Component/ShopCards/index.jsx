import React from "react";

import Section from "../ui/section";
import IconButton from "../ui/iconbutton";

import "./index.css";

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

const ShopCards = ({ image, title, description, price }) => {
  return (
    <Section width="all">
      {shopCards.map((shop, index) => (
        <div className="shop-card" key={index}>
          <img
            className="shop-card__image"
            src={shop.image}
            alt="guys standing in pose"
          />
          <div className="shop-card__content">
            <div className="shop-card__content_box">
              <h4 className="shop-card__title">{shop.title}</h4>
              <p className="shop-card__text">{shop.description}</p>
            </div>
            <div className="shop-card__button">
              <p className="button__price">{shop.price}</p>
              <IconButton card="buy now" />
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default ShopCards;
