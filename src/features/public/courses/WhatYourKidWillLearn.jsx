import React from "react";
import LearnSkill from "./LearnSkill";
import backGroundImg from "../../../assets/ourCoursesPage/Background.png";
const WhatYourKidWillLearn = ({ ImageUrl, text, learningSkill, flexFlow }) => {
  return (
    <div className=" relative">
      <div>
        <img src={backGroundImg} alt="" />
      </div>
      <div className=" absolute w-full h-full top-0 left-0">
        <div
          className={`w-full h-full gap-6 flex  justify-center items-center ${flexFlow}`}
        >
          <div>
            <img src={ImageUrl} alt="" />
          </div>
          <div className=" flex flex-col gap-12 w-[628px]">
            <div className=" flex flex-col gap-4">
              <h1 className="font-semibold text-[36px] leading-[54px] font-poppin text-orange-600">
                What Your Kid Will Learn
              </h1>
              <p className="font-normal text-[20px] leading-[30px] font-roboto text-neutral-700">
                {text}
              </p>
            </div>
            <div className=" flex flex-wrap gap-10">
              {learningSkill.map((skill, index) => (
                <LearnSkill key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYourKidWillLearn;
