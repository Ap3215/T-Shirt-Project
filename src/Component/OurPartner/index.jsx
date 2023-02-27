import React from "react";

import Button from "../ui/button";
import Section from "../ui/section";

import style from "./index.module.css";

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
    <Section width="all">
      {cardData.map((card, index) => (
        <div key={index} className={`${style["card"]}`}>
          <div className={style["card__image"]}>
            <img
              className={style["card__image"]}
              src={card.image}
              alt="Girl sitting in office and hold cup of coffie"
            />
          </div>

          <div className={style.card__content}>
            <h4 className={style["card__content--title"]}>{card.title}</h4>
            <p className={style["card__content--des"]}>{card.description}</p>
            <Button name="learn more" color="green" />
          </div>
        </div>
      ))}
    </Section>
  );
};
export default OurPartner;
