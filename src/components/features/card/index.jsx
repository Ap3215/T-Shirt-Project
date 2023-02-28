import React from "react";

import { FiLayers } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { GiLifeJacket } from "react-icons/gi";
import { FaPalette } from "react-icons/fa";

import Section from "../../ui/section";
import FeatureHeading from "../../ui/feature-heading";

import classes from "./index.module.css";
import { attachClasses } from "../../../utils";

const cardItems = [
  {
    name: "quality material",
    date: "1 feb 2023",
    icon: <FaPalette />,
  },
  {
    name: "quality material",
    date: "5 feb 2023",
    icon: <CiFaceSmile />,
  },
  {
    name: "quality material",
    date: "13 feb 2023",
    icon: <GiLifeJacket />,
  },
  {
    name: "quality material",
    date: "16 feb 2023",
    icon: <FiLayers />,
  },
];

const Card = () => {
  return (
    <Section background="primary" color="primary" width="all">
      <FeatureHeading
        feature="our feature"
        heading="black"
        font="smallfont"
        border="bordertop"
        margin="marginbottom"
      />
      {cardItems.map((item, index) => (
        <div key={index} className={attachClasses(classes["card-wrapper"])}>
          <div className={attachClasses(classes["card_images"])}>
            <span className={attachClasses(classes["card_images_icon"])}>
              {item.icon}
            </span>
          </div>

          <div className={attachClasses(classes["card_box"])}>
            <h4 className={attachClasses(classes["card_title"])}>
              {item.name}
            </h4>
            <h5 className={attachClasses(classes["card_text"])}>{item.date}</h5>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Card;