import React from "react";

const LongCol = ({ src }) => {
  return (
    <div className="grid grid-rows-subgrid gap-4 row-span-2 ">
      <div className=" row-start-1 row-end-3 rounded-xl overflow-hidden">
        <img className=" h-full w-full " src={src} alt />
      </div>
    </div>
  );
};

export default LongCol;
