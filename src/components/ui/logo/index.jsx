import React from "react";
import { Link } from "react-router-dom";

import { attachClasses } from "../../../utils/index";

import classes from "./index.module.css";

const Logo = ({ logo }) => {
  return <Link className={attachClasses(classes["logo"])}>{logo}</Link>;
};

export default Logo;
