import React from "react";

import "./index.css";

const HeroHeading = ({ first_heading, second_heading }) => {
  return (
    <div className="heading">
      <h3 className="heading-medium">{second_heading}</h3>
      <h1 className="heading-bigger">{first_heading}</h1>
    </div>
  );
};

export default HeroHeading;
