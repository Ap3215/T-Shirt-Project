import React from "react";

import Button from "../Button";
import IconButton from "../IconButton";

import "./index.css";

const WorksCard = () => {
  return (
    <div className="works-card works-card_two">
      <h4 className="works-card-header works-card-border mb-3">
        unique t-shirt design
      </h4>
      <p className="works-card_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        corporis natus voluptatibus quia iure magni rerum quos perferendis rem.
        Nesciunt facere tempore deleniti eligendi natus, corporis est minima
        dicta iusto.
        <br /> <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ullam
        porro qui expedita? Facilis rerum nisi praesentium, suscipit mollitia
        voluptatem sint aut similique vel necessitatibus, libero autem iure,
        sequi quos.
      </p>
      <div className="works-card_button">
        <Button buttonWidth="card" card="buy for $59" />
        <IconButton card="view all" />
      </div>
    </div>
  );
};

export default WorksCard;
