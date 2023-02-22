import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Button = ({ name, card, buttonWidth, color }) => {
  return (
    <Link
      className={`button button-main button__${color} button__${buttonWidth}  `}
    >
      {name}
      {card}
    </Link>
  );
};

export default Button;
