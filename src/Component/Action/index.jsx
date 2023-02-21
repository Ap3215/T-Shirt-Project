import React from "react";

import { IoLogoYoutube } from "react-icons/io";

import classes from "./index.module.css";

const Action = () => {
  return (
    <div className={classes["action"]}>
      <img
        className={classes["action__image"]}
        src="/Images/action img.jpeg"
        alt="cloth with button icon "
      />
      <div className={classes["action__icon"]}>
        <IoLogoYoutube />
      </div>
    </div>
  );
};

export default Action;
