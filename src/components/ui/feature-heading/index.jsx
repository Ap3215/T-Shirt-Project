import React from "react";

import classes from "./index.module.css";

import { attachClasses } from "../../../utils";

const FeatureHeading = ({ feature, heading, font, margin, border }) => {
  return (
    <h4
      className={attachClasses(
        classes["feature__heading"],
        classes[`feature--${margin}`],
        classes[`feature--${border}`],
        classes[`feature--${font}`],
        classes[`title--${heading}`]
      )}
    >
      {feature}
    </h4>
  );
};

export default FeatureHeading;
