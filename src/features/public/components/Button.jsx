import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = ({
  label,
  arrowDirection = 0,
  bgColor,
  className,
  ...props
}) => {
  return (
    <button
      className={`bg-${bgColor} flex gap-3 items-center text-white px-3 py-2 rounded-xl active:scale-90 duration-200 group ${className}`}
      {...props}
    >
      {label}{" "}
      <BsArrowRight style={{ transform: `rotate(${arrowDirection}deg)` }} />
    </button>
  );
};

export default Button;
