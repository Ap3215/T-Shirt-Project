import React from "react";

import Button from "../Button";
import IconButton from "../IconButton";

import "./index.css";

const WorksCards = () => {
  return (
    <div className="Cards">
      <div className="Card Card_one">
        <img
          className="Card_picture"
          src="/Images/mbr (1).jpeg"
          alt="flower in background"
        />
        <div className="Card_body">
          <h4 className="Card-title">unique t-shirt</h4>
        </div>
        <div className="Card_button">
          <Button buttonWidth="card" card="buy for $59" />
          <IconButton card="view all" />
        </div>
      </div>
      <div className="Card Card_two">
        <h4 className="Card-header Card-border mb-3">unique t-shirt design</h4>
        <p className="Card_text">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          corporis natus voluptatibus quia iure magni rerum quos perferendis
          rem. Nesciunt facere tempore deleniti eligendi natus, corporis est
          minima dicta iusto.
          <br /> <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ullam
          porro qui expedita? Facilis rerum nisi praesentium, suscipit mollitia
          voluptatem sint aut similique vel necessitatibus, libero autem iure,
          sequi quos.
        </p>
        <div className="Card_button">
          <Button buttonWidth="card" card="buy for $59" />
          <IconButton card="view all" />
        </div>
      </div>
    </div>
  );
};

export default WorksCards;
