import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Logo = (props) => {
  // console.log(props);
  return <Link className="logo">{props.logoName}</Link>;
};

export default Logo;
