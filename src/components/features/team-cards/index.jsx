import React from "react";

import IconButton from "../../ui/iconbutton";
import Section from "../../ui/section";
import FeatureHeading from "../../ui/feature-heading";
import { attachClasses } from "../../../utils/index";

import classes from "./index.module.css";

const teamCards = [
  {
    image: "Images/team1.jpg",
    name: "jessica swift",
    post: "Manager",
    description: "Lorem ipsum dolor sit amet, consectet adipiscing elit.",
  },
  {
    image: "Images/team2.jpg",
    name: "ben palmer",
    post: "Designer",
    description: "Lorem ipsum dolor sit amet, consectet adipiscing elit.",
  },
  {
    image: "Images/team3.jpg",
    name: "adam brown",
    post: "Developer",
    description: "Lorem ipsum dolor sit amet, consectet adipiscing elit.",
  },
];

const TeamCard = () => {
  return (
    <Section width="all" background="primary">
      <FeatureHeading
        feature="Our Team"
        heading="black"
        font="bigfont"
        border="bordernon"
        margin="marginnon"
      />
      <p className={attachClasses(classes["teams"])}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      {teamCards.map((card, index) => (
        <div key={index} className={attachClasses(classes["card"])}>
          <img
            className={attachClasses(classes["card__image"])}
            src={card.image}
            alt="Girl sitting in office and hold cup of coffie"
          />

          <div className={attachClasses(classes["card__content"])}>
            <h4 className={attachClasses(classes["card__content--title"])}>
              {card.name}
            </h4>
            <h5 className={attachClasses(classes["card__content--post"])}>
              {card.post}
            </h5>
            <p className={attachClasses(classes["card__content--des"])}>
              {card.description}
            </p>
          </div>
          <div className={attachClasses(classes["card__button"])}>
            <IconButton name="view profile" />
          </div>
        </div>
      ))}
    </Section>
  );
};

export default TeamCard;
