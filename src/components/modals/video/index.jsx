import React, { useEffect } from "react";

import { AiFillCloseCircle } from "react-icons/ai";
import { attachClasses } from "../../../utils/index";

import classes from "./index.module.css";

const MyModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <>
      <div className={attachClasses(classes["modal"])}></div>
      <div className={attachClasses(classes["modal__container"])}>
        <video controls>
          <source
            src="/video/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-medium.mp4"
            type="video/mp4"
          />
        </video>
        <AiFillCloseCircle
          className={attachClasses(classes["modal__iconbutton"])}
          onClick={closeModal}
        ></AiFillCloseCircle>
      </div>
    </>
  );
};

export default MyModal;
