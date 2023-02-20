import React from "react";

import Button from "../Button";
import IconButton from "../IconButton";
import WorksCard from "../WorksCard";

import "./index.css";

const WorksCards = () => {
  return (
    <div className="works-cards">
      <div className="works-card works-card_one">
        <img
          className="works-card_picture"
          src="/Images/mbr (1).jpeg"
          alt="flower in background"
        />
        <div className="works-card_body">
          <h4 className="works-card-title">unique t-shirt</h4>
        </div>
        <div className="works-card_button">
          <Button buttonWidth="card" card="buy for $59" />
          <IconButton card="view all" />
        </div>
      </div>
      <WorksCard />
    </div>
  );
};

export default WorksCards;
