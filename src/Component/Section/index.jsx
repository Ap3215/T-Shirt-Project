import React from "react";

import FeatureHeading from "../FeatureHeading";

import "./index.css";

const Section = (props) => {
  const { children } = props;
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <FeatureHeading feature={"our feature"} />
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
