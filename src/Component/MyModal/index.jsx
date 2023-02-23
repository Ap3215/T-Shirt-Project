import { Link } from "react-router-dom";

import { AiFillCloseCircle } from "react-icons/ai";

import classes from "./index.module.css";

const MyModal = ({ closeModal }) => {
  return (
    <>
      <div className={classes["modal"]}>
        <video className={classes["modal__video"]}>
          <source
            src="/video/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-medium.mp4"
            type="video/mp4"
          />
        </video>
        <AiFillCloseCircle
          className={classes["modal__iconbutton"]}
          onClick={closeModal}
        ></AiFillCloseCircle>
      </div>
    </>
  );
};

export default MyModal;
