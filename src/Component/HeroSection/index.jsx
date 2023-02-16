import React from "react";

import HeroHeading from "../HeroHeading";
import Button from "../Button";

import "./index.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row row-bg justify-content">
          <HeroHeading
            first_heading="T-Shirt Design"
            second_heading="Create your"
          />
          <Button name="Get Started" />
          <h4 className="heading-underline">view how it works</h4>
          <p className="p-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
