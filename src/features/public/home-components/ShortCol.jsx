import React from "react";

const ShortCol = ({ src, className }) => {
  return (
    <div className={`w-full ${className} rounded-xl overflow-hidden `}>
      <img className=" h-full" src={src} alt />
    </div>
  );
};

export default ShortCol;
