import React from "react";
import { Link } from "react-router-dom";

import classes from "./index.module.css";

const Logo = ({ logo }) => {
  return <Link className={classes["logo"]}>{logo}</Link>;
};

export default Logo;
