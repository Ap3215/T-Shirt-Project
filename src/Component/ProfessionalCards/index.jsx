import React from "react";

import Card from "react-bootstrap/Card";

import Section from "../ui/section";
import FeatureHeading from "../ui/featureheading";

import "./index.css";

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
        <Card key={index}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text} </Card.Text>
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
