import React from "react";

import Section from "../section";

import classes from "./index.module.css";

import { attachClasses } from "../../../utils";

const About = ({ display, heading, text }) => {
  return (
    <Section background="primary" color="primary" width="about">
      <div className={attachClasses(classes[`about__${display}`])}>
        <h4 className={attachClasses(classes["about__heading"])}>{heading}</h4>
        <p className={attachClasses(classes[`text__${text}`])}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet minima
          quis odit a quia libero ex et dolor exercitationem quae expedita
          deleniti perspiciatis autem, animi, dicta quisquam officia tempore
          excepturi.
        </p>
      </div>
    </Section>
  );
};

export default About;
