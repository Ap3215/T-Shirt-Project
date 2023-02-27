import React from "react";
import { Link } from "react-router-dom";

import { FaAngleRight } from "react-icons/fa";

import "./index.css";

const IconButton = ({ name, card }) => {
  return (
    <Link className="icon_button icon_button-main">
      {name}
      {card}
      <span>
        <FaAngleRight className="icons" />
      </span>
    </Link>
  );
};

export default IconButton;
