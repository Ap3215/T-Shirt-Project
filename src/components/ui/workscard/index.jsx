import React from "react";

import Button from "../button";
import IconButton from "../iconbutton";
import { attachClasses } from "../../../utils/index";

import classes from "./index.module.css";

const WorksCard = () => {
  return (
    <div
      className={attachClasses(
        classes["works-card"],
        classes["works-card_two"]
      )}
    >
      <h4
        className={attachClasses(
          "mb-3",
          classes["works-card-header"],
          classes["works-card-border"]
        )}
      >
        unique t-shirt design
      </h4>
      <p className={attachClasses(classes["works-card_text"])}>
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
      <div className={attachClasses(classes["works-card_button"])}>
        <Button buttonWidth="card" card="buy for $59" />
        <IconButton card="view all" />
      </div>
    </div>
  );
};

export default WorksCard;
