import React from "react";

import classes from "./index.module.css";

import { attachClasses } from "../../../utils";

const Section = ({ children, color, width, background }) => {
  return (
    <section
      className={attachClasses(
        classes["section"],
        classes[`section__${background}`]
      )}
    >
      <div
        className={attachClasses("conatiner", classes[`container__${width}`])}
      >
        <div
          className={attachClasses(
            "row",
            classes["row"],
            // classes["justify-content-center"],
            classes[`row__${color}`]
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
