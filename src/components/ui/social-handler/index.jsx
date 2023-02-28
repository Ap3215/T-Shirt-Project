import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { attachClasses } from "../../../utils/index";

import classes from "./index.module.css";

const SocialHandler = () => {
  return (
    <div className={attachClasses(classes["socialhandler"])}>
      <FaFacebookF className={attachClasses(classes["socialhandler-icon"])} />
      <FaTwitter className={attachClasses(classes["socialhandler-icon"])} />
      <FaInstagram className={attachClasses(classes["socialhandler-icon"])} />
    </div>
  );
};

export default SocialHandler;
