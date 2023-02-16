import React from "react";

import Card from "react-bootstrap/Card";
import Button from "../Button";
import IconButton from "../IconButton";

import "./index.css";

const WorksCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../Images/mbr (1).jpeg" />
      <Card.Body>
        <Card.Title>unique t-shirt</Card.Title>
        <div>
          <Button card="buy for $59" />
          <IconButton card="view all" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default WorksCard;
