import React from "react";

import IconButton from "../ui/iconbutton";
import Section from "../ui/section";
import FeatureHeading from "../ui/featureheading";

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
    <Section width="all">
      <FeatureHeading
        feature="Our Team"
        heading="black"
        font="bigfont"
        border="bordernon"
        margin="marginnon"
      />
      <p className={classes["teams"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      {teamCards.map((card, index) => (
        <div key={index} className={`${classes["card"]}`}>
          <img
            className={classes["card__image"]}
            src={card.image}
            alt="Girl sitting in office and hold cup of coffie"
          />

          <div className={classes["card__content"]}>
            <h4 className={classes["card__content--title"]}>{card.name}</h4>
            <h5 className={classes["card__content--post"]}>{card.post}</h5>
            <p className={classes["card__content--des"]}>{card.description}</p>
          </div>
          <div className={classes["card__button"]}>
            <IconButton name="view profile" />
          </div>
        </div>
      ))}
    </Section>
  );
};

export default TeamCard;
