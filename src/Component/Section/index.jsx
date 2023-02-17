import React from "react";

import FeatureHeading from "../FeatureHeading";

import "./index.css";

const Section = (props) => {
  const { children, color } = props;
  console.log(props);

  return (
    <section className="section">
      <div className="container">
        <div className={`row row__${color}`}>
          <FeatureHeading feature="our feature" />
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
