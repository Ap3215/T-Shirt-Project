import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Button = (props) => {
  const { name, card, buttonWidth } = props;
  return (
    <Link className={`button button-main button__${buttonWidth}  `}>
      {name}
      {card}
    </Link>
  );
};

export default Button;
