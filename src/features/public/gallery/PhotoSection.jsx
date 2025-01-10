import React from "react";
import ImgGridRow1 from "./components/ImgGridRow1";
import ImgGridRow2 from "./components/ImgGridRow2";
import ImgGridRow3 from "./components/ImgGridRow3";

const PhotoSection = () => {
  return (
    <div className=" flex flex-col  gap-6 mx-4">
      <ImgGridRow1 />
      <ImgGridRow2 />
      <ImgGridRow3 />
    </div>
  );
};

export default PhotoSection;
