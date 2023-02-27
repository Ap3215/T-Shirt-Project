import React from "react";

import Button from "../ui/button";
import IconButton from "../ui/iconbutton";
import WorksCard from "../ui/workscard";
import Section from "../ui/section";
import FeatureHeading from "../ui/featureheading";

import "./index.css";

const WorksCards = () => {
  return (
    <Section background="primary" color="black" width="all">
      <FeatureHeading
        feature="How it works?"
        heading="white"
        font="bigfont"
        border="bordernon"
        margin="marginbottom"
      />
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
    </Section>
  );
};

export default WorksCards;
