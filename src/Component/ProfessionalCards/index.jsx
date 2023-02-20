import React from "react";

import Card from "react-bootstrap/Card";

import "./index.css";

const ProfessionalCards = ({ images, title, text, button }) => {
  return (
    <Card>
      <Card.Img variant="top" src={images} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text} </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link to="">{button}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ProfessionalCards;
