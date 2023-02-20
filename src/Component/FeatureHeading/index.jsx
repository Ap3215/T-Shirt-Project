import React from "react";

import "./index.css";

const FeatureHeading = (props) => {
  const { feature, heading, font } = props;
  console.log(heading);
  return (
    <h4
      className={`feature_heading feature_border feature__${font}  title__${heading} `}
    >
      {feature}
    </h4>
  );
};

export default FeatureHeading;
