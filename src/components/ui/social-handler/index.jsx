import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import classes from "./index.module.css";

const SocialHandler = () => {
  return (
    <div className={classes["socialhandler"]}>
      <FaFacebookF className={classes["socialhandler-icon"]} />
      <FaTwitter className={classes["socialhandler-icon"]} />
      <FaInstagram className={classes["socialhandler-icon"]} />
    </div>
  );
};

export default SocialHandler;
