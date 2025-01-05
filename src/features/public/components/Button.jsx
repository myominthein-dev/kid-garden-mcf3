import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = ({ label, arrowDirection = 0, color, className, ...props }) => {
  return (
    <button
      className={` bg-${color}-400  flex gap-3 items-center text-white px-3 py-2 rounded-xl active:scale-90 duration-200 group ${className}`}
      {...props}
    >
      {label}{" "}
      <BsArrowRight style={{ transform: `rotate(${arrowDirection}deg)` }} />
    </button>
  );
};

export default Button;
