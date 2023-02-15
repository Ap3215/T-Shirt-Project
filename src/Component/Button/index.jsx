import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Button = (props) => {
  return <Link className="button button-main">{props.name}</Link>;
};

export default Button;
