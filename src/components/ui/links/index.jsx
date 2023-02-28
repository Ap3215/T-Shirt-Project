import React from "react";

import { Link } from "react-router-dom";
import { attachClasses } from "../../../utils/index";

import classes from "./index.module.css";

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
    <ul className={attachClasses(classes["link-item"])}>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            className={attachClasses(classes["link-item__list"])}
            to={link.to}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderLinks;
