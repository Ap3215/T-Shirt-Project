import { Link } from "react-router-dom";

import { AiFillCloseCircle } from "react-icons/ai";

import classes from "./index.module.css";

const MyModal = ({ closeModal }) => {
  return (
    <>
      {/* <h1>ksdfjkdfj</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        consequuntur fuga placeat voluptatem sapiente sint minus, ab est harum?
        Quibusdam illo dolor culpa, beatae deserunt maxime necessitatibus. Sunt,
        omnis sint!
      </p>
      <AiFillCloseCircle onClick={closeModal}></AiFillCloseCircle> */}
      <div className={classes["modal"]}>
        <Link to="https://www.youtube.com/watch?v=PivzLLqDZac"></Link>
        <AiFillCloseCircle onClick={closeModal}></AiFillCloseCircle>
      </div>
    </>
  );
};

export default MyModal;
