import React from "react";

import { Link } from "react-router-dom";

import classes from "./index.module.css";

import { attachClasses } from "../../../utils";

const Button = ({ name, card, buttonWidth, color }) => {
  return (
    <Link
      className={attachClasses(
        classes["button"],
        classes["button--main"],
        classes[`button__${color}`],
        classes[`button__${buttonWidth}`]
      )}
    >
      {name}
      {card}
    </Link>
  );
};

export default Button;
