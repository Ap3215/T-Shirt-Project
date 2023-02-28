import React from "react";

import HeroHeading from "../heroheading";
import Button from "../button";

import classes from "./index.module.css";

import { attachClasses } from "../../../utils";

const HeroSection = () => {
  return (
    <section className={attachClasses(classes["hero-section"])}>
      <div className={attachClasses(classes["container"])}>
        <div
          className={attachClasses(
            "row",
            classes["row"],
            classes["row--bg"],
            classes["justify__content"]
          )}
        >
          <HeroHeading
            first_heading="T-Shirt Design"
            second_heading="Create your"
          />
          <Button color="black" name="Get Started" buttonWidth="hero_page" />
          <h4 className={attachClasses(classes["heading__underline"])}>
            view how it works
          </h4>
          <p className={attachClasses(classes["p__text"])}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
