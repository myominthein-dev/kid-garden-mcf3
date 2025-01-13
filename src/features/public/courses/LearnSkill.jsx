import React from "react";
import VectorImg from "../../../assets/ourCoursesPage/Vector.png";

const LearnSkill = ({ skill }) => {
  return (
    <div className=" flex gap-4 items-center ">
      <img src={VectorImg} alt="" />
      <p className=" font-normal font-pacifico text-neutral-900 text-base text-nowrap md:text-[22px] leading-[35px]">
        {skill}
      </p>
    </div>
  );
};

export default LearnSkill;
