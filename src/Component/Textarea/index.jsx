import React from "react";

const Textarea = ({ register, type, placeholder }) => {
  return (
    <div>
      <textarea type={type} placeholder={placeholder} {...register}></textarea>
    </div>
  );
};

export default Textarea;
