import React from "react";

import Button from "../../ui/button";
import IconButton from "../../ui/iconbutton";
import WorksCard from "../../ui/workscard";
import Section from "../../ui/section";
import FeatureHeading from "../../ui/feature-heading";

import classes from "./index.module.css";

import { attachClasses } from "../../../utils";

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
      <div className={attachClasses(classes["works-cards"])}>
        <div
          className={attachClasses(
            classes["works-card"],
            classes["works-card_one"]
          )}
        >
          <img
            className={attachClasses(classes["works-card_picture"])}
            src="/Images/mbr (1).jpeg"
            alt="flower in background"
          />
          <div className={attachClasses(classes["works-card_body"])}>
            <h4 className={attachClasses(classes["works-card-title"])}>
              unique t-shirt
            </h4>
          </div>
          <div className={attachClasses(classes["works-card_button"])}>
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
