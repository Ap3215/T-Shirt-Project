import React from "react";

import "./index.css";

const Section = ({ children, color, width, background }) => {
  return (
    <section className={`section section__${background}`}>
      <div className={`container__${width}`}>
        <div className={`row justify-content-center row__${color}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
