import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const links = [
  {
    to: "/about_us",
    title: "About us",
  },
  {
    to: "/services",
    title: "Services",
  },
  {
    to: "/contact",
    title: "Contact",
  },
];

const HeaderLinks = () => {
  return (
    <li>
      {links.map((link) => (
        <Link className="list_link" to={link.to}>
          {link.title}
        </Link>
      ))}
    </li>
  );
};

export default HeaderLinks;
