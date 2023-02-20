import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Logo = (logoName) => {
  // console.log(props);
  return <Link className="logo">{logoName}</Link>;
};

export default Logo;
