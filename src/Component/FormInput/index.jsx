import React from "react";

import classes from "./index.module.css";

const FormInput = ({ register, type, placeholder }) => {
  return (
    <div>
      <input
        className={classes["Form__input"]}
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};

export default FormInput;
