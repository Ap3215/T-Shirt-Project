import React from "react";
import { Link } from "react-router-dom";

import { FaAngleRight } from "react-icons/fa";

import classes from "./index.module.css";

import { attachClasses } from "../../../utils";

const IconButton = ({ name, card }) => {
  return (
    <Link
      className={attachClasses(
        classes["icon_button"],
        classes["icon_button-main"]
      )}
    >
      {name}
      {card}
      <span>
        <FaAngleRight className={attachClasses(classes["icons"])} />
      </span>
    </Link>
  );
};

export default IconButton;
