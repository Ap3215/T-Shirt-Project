import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Logo = ({ logo }) => {
  return <Link className="logo">{logo}</Link>;
};

export default Logo;
