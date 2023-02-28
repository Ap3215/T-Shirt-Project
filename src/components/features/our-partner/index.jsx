import React from "react";

import Button from "../../ui/button";
import Section from "../../ui/section";
import { attachClasses } from "../../../utils/index";

import classes from "./index.module.css";

const cardData = [
  {
    image: "/Images/1.png",
    title: "Our partner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla suscipit.",
  },
  {
    image: "/Images/2.png",
    title: "Our partner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla suscipit.",
  },
  {
    image: "/Images/3.png",
    title: "Our partner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla suscipit.",
  },
];

const OurPartner = () => {
  return (
    <Section width="all" background="primary">
      {cardData.map((card, index) => (
        <div key={index} className={attachClasses(classes["card"])}>
          <div className={attachClasses(classes["card__image"])}>
            <img
              className={attachClasses(classes["card__image"])}
              src={card.image}
              alt="Girl sitting in office and hold cup of coffie"
            />
          </div>

          <div className={attachClasses(classes["card__content"])}>
            <h4 className={attachClasses(classes["card__content--title"])}>
              {card.title}
            </h4>
            <p className={attachClasses(classes["card__content--des"])}>
              {card.description}
            </p>
            <Button name="learn more" color="green" />
          </div>
        </div>
      ))}
    </Section>
  );
};
export default OurPartner;
