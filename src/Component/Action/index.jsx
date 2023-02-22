import React, { useState } from "react";

import { IoLogoYoutube } from "react-icons/io";

import MyModal from "../MyModal";

import classes from "./index.module.css";

const Action = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
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
  );
};

export default Action;
