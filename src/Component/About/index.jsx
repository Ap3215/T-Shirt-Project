import React from "react";

import "./index.css";

const About = ({ display, heading, text }) => {
  return (
    <>
      <div className={`about_${display}`}>
        <h4 className="about_heading">{heading}</h4>
        <p className={`text__${text}`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet minima
          quis odit a quia libero ex et dolor exercitationem quae expedita
          deleniti perspiciatis autem, animi, dicta quisquam officia tempore
          excepturi.
        </p>
      </div>
    </>
  );
};

export default About;
