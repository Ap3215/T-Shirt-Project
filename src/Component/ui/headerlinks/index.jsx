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
    <ul className="main-nav-list">
      {links.map((link, index) => (
        <li key={index}>
          <Link className="list_link" to={link.to}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderLinks;
