import React from "react";
import LearnSkill from "./LearnSkill";
import backGroundImg from "../../../assets/ourCoursesPage/Background.png";
const WhatYourKidWillLearn = ({ ImageUrl, text, learningSkill, flexFlow }) => {
  return (
    <div className=" relative ">
      <div>
        <img src={backGroundImg} className="lg:h-[1250px] xl:h-auto" alt="" />
      </div>
      <div className=" absolute xl:p-10 w-full h-full top-0 left-0">
        <div
          className={`w-full lg:py-10 xl:py-0 h-full gap-6 flex lg:justify-around   xl:justify-center items-center lg:flex-col xl:${flexFlow}`}
        >
          <div className=" lg:w-[80%]  ">
            <img className=" lg:w-full" src={ImageUrl} alt="" />
          </div>
          <div className=" flex flex-col gap-12 xl:w-[628px] lg:w-[80%] ">
            <div className=" flex flex-col gap-4">
              <h1 className="font-semibold text-[36px] leading-[54px] font-poppin text-orange-600">
                What Your Kid Will Learn
              </h1>
              <p className="font-normal text-[20px] leading-[30px] font-roboto text-neutral-700">
                {text}
              </p>
            </div>
            <div className=" flex flex-wrap gap-10 w-[628px]">
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
