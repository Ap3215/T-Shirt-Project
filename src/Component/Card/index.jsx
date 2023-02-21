import React from "react";

import "./index.css";

const Card = ({ icon, name, date }) => {
  return (
    <div className="card-wrapper">
      <div className="card_images">
        <span className="card_images_icon">{icon}</span>
      </div>
      <div className="card_box">
        <h4 className="card_title">{name}</h4>
        <h5 className="card_text">{date}</h5>
      </div>
    </div>
  );
};

export default Card;
