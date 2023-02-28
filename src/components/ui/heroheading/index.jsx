import React from "react";

import classes from "./index.module.css";

const HeroHeading = ({ first_heading, second_heading }) => {
  return (
    <div className={classes["heading"]}>
      <h3 className={classes["heading-medium"]}>{second_heading}</h3>
      <h1 className={classes["heading-bigger"]}>{first_heading}</h1>
    </div>
  );
};

export default HeroHeading;
