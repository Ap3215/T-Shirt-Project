import React from "react";
import { Link } from "react-router-dom";

import { FaAngleRight } from "react-icons/fa";

import "./index.css";

const IconButton = (props) => {
  return (
    <Link className="icon_button icon_button-main">
      {props.name}
      {props.card}
      <span>
        <FaAngleRight className="icons" />
      </span>
    </Link>
  );
};

export default IconButton;
