import React from "react";
import letterImg from "../../../../assets/gallery/letterFly.svg";

const TopTitle = () => {
  return (
    <div className=" flex justify-center flex-col items-center gap-4 relative">
      <h1 className=" text-xl leading-9 font-normal text-orange-500 font-pacifico">
        Gallery
      </h1>
      <p className=" xl:text-4xl text-2xl font-poppin leading-[54px] font-semibold">
        Our Colourful Journey
      </p>
      <img
        className="  hidden xl:inline-block absolute bottom-2 left-0 translate-x-44 translate-y-24 rotate-3 "
        src={letterImg}
        alt=""
      />
    </div>
  );
};

export default TopTitle;
