import React, { useState } from "react";

import { IoLogoYoutube } from "react-icons/io";
import Section from "../ui/section";
import FeatureHeading from "../ui/featureheading";
import MyModal from "../modals/video";

import classes from "./index.module.css";

const Action = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <Section background="green">
      <FeatureHeading
        feature="View in Action"
        heading="white"
        font="biggerfont"
        border="bordernon"
      />
      <div className={classes["action"]}>
        <img
          className={classes["action__image"]}
          src="/Images/action img.jpeg"
          alt="cloth with button icon "
        />
        <div className={classes["action__icon"]}>
          <IoLogoYoutube onClick={() => setShowModal(true)}></IoLogoYoutube>
          {showModal && <MyModal closeModal={closeModal} />}
        </div>
      </div>
    </Section>
  );
};

export default Action;
