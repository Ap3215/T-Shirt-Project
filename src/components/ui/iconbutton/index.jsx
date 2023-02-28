import React from "react";
import { Link } from "react-router-dom";

import { FaAngleRight } from "react-icons/fa";
import { attachClasses } from "../../../utils/index";

import classes from "./index.module.css";

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
