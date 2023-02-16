import React from "react";

import "./index.css";

const Card = (props) => {
  const {
    icon1,
    icon2,
    icon3,
    icon4,
    name1,
    name2,
    name3,
    name4,
    date1,
    date2,
    date3,
    date4,
  } = props;
  return (
    <div className="card-wrapper">
      <div className="card_images">
        <span className="card_images_icon">
          {icon1}
          {icon2}
          {icon3}
          {icon4}
        </span>
      </div>
      <div className="card_box">
        <h4 className="card_title">
          {name1}
          {name2}
          {name3}
          {name4}
        </h4>
        <h5 className="card_text">
          {date1}
          {date2}
          {date3}
          {date4}
        </h5>
      </div>
    </div>
  );
};

export default Card;
