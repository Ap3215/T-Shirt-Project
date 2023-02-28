import React from "react";

import Classes from "./index.module.css";

const HeroHeading = ({ first_heading, second_heading }) => {
  return (
    <div className={Classes["heading"]}>
      <h3 className={Classes["heading-medium"]}>{second_heading}</h3>
      <h1 className={Classes["heading-bigger"]}>{first_heading}</h1>
    </div>
  );
};

export default HeroHeading;
