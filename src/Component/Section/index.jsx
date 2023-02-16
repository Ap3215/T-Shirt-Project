import React from "react";

import { FaPalette } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { GiLifeJacket } from "react-icons/gi";

import Card from "../Card";
import FeatureHeading from "../FeatureHeading";

import "./index.css";

const Section = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <FeatureHeading title="our feature" />
          <Card
            name1="unique design"
            date1="05 feb 2023"
            image1={<FaPalette />}
          />
          <Card
            name2="quality material"
            date2="10 feb 2023"
            image2={<FiLayers />}
          />
          <Card
            name3="good review"
            date3="13 feb 2023"
            image3={<CiFaceSmile />}
          />
          <Card
            name4="high print qulity"
            date4="16 feb 2023"
            image4={<GiLifeJacket />}
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
