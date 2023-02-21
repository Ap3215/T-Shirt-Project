import React from "react";

import IconButton from "../IconButton";

import "./index.css";

const ShopCards = ({ image, title, description, price }) => {
  return (
    <div className="shop-card">
      <img
        className="shop-card__image"
        src={image}
        alt="guys standing in pose"
      />
      <div className="shop-card__content">
        <div className="shop-card__content_box">
          <h4 className="shop-card__title">{title}</h4>
          <p className="shop-card__text">{description}</p>
        </div>
        <div className="shop-card__button">
          <p className="button__price">{price}</p>
          <IconButton card="buy now" />
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
