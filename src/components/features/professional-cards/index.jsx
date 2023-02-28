import React from "react";

import Card from "react-bootstrap/Card";

import Section from "../../ui/section";
import FeatureHeading from "../../ui/feature-heading";
import { attachClasses } from "../../../utils/index";

import classes from "./index.module.css";

const professionalCardItems = [
  {
    image: "/Images/mbr.jpg",
    title: "Quality Material",
    text: "Lorem ipsum dolor sit amet",
    buttonName: "Read More",
  },
  {
    image: "/Images/mbr-1.jpg",
    title: "High Proint Quality",
    text: "Lorem ipsum dolor sit amet",
    buttonName: "Read More",
  },
  {
    image: "/Images/mbr (1).jpeg",
    title: "Good Reviews",
    text: "Lorem ipsum dolor sit amet",
    buttonName: "Read More",
  },
];

const ProfessionalCards = () => {
  return (
    <Section background="primary" color="primary" width="all">
      <FeatureHeading
        feature="Professional Tools"
        heading="black"
        font="bigfont"
        border="bordernon"
        margin="marginbottom"
      />
      {professionalCardItems.map((card, index) => (
        <Card className={attachClasses(classes["card"])} key={index}>
          <Card.Img
            className={attachClasses(classes["card-img-top"])}
            variant="top"
            src={card.image}
          />
          <Card.Body>
            <Card.Title className={attachClasses(classes["card-title h5"])}>
              {card.title}
            </Card.Title>
            <Card.Text className={attachClasses(classes["card-text"])}>
              {card.text}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link to="">{card.button}</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </Section>
  );
};

export default ProfessionalCards;
