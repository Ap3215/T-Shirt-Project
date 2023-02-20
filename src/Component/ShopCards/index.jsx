import React from "react";

import IconButton from "../IconButton";

import "./index.css";

const ShopCards = ({ image, title, description, price }) => {
  return (
    <div className="shop_card">
      <img className="shop_image" src={image} alt="guys standing in pose" />
      <div className="shop_content">
        <div className="content_box">
          <h4 className="shop_title">{title}</h4>
          <p className="shop_text">{description}</p>
        </div>
        <div className="shop_button">
          <p className="button_price">{price}</p>
          <IconButton card="buy now" />
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
