import React from "react";

import "./index.css";

const FeatureHeading = ({ feature, heading, font, margin, border }) => {
  return (
    <h4
      className={`feature_heading feature_${margin} feature_${border} feature__${font}  title__${heading} `}
    >
      {feature}
    </h4>
  );
};

export default FeatureHeading;
