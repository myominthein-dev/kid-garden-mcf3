import React from "react";
import OrangeDiamond from "../../../assets/ourCoursesPage/OrangeDiamond.png";
import PinkDiamond from "../../../assets/ourCoursesPage/PinkDiamond.png";
import GreenDiamond from "../../../assets/ourCoursesPage/GreenDiamond.png";

const DimaondGroup = () => {
  return (
    <div className="  w-[73px]">
      <img className=" ml-auto" src={PinkDiamond} alt="" />
      <img className=" " src={OrangeDiamond} alt="" />
      <img className=" ml-auto" src={GreenDiamond} alt="" />
    </div>
  );
};

export default DimaondGroup;
