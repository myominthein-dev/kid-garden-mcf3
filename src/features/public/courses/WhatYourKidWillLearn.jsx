import React from "react";
import LearnSkill from "./LearnSkill";
import backGroundImg from "../../../assets/ourCoursesPage/Background.png";
const WhatYourKidWillLearn = ({ ImageUrl, text, learningSkill, flexFlow }) => {
  return (
    <div className=" relative ">
      <div>
        <img
          src={backGroundImg}
          className="md:h-[1250px] xl:h-auto h-[1100px]"
          alt=""
        />
      </div>
      <div className=" absolute xl:p-10 w-full h-full top-0 left-0">
        <div
          className={`w-full md:py-10 xl:py-0 h-full gap-6 flex justify-evenly flex-col   xl:justify-center items-center md:flex-col xl:${flexFlow}`}
        >
          <div className=" md:w-[80%] w-[95%] ">
            <img className=" md:w-full" src={ImageUrl} alt="" />
          </div>
          <div className=" flex flex-col gap-12 xl:w-[628px] md:w-[80%] w-[90%] ">
            <div className=" flex flex-col gap-4">
              <h1 className="font-semibold text-[36px] leading-[54px] font-poppin text-orange-600">
                What Your Kid Will Learn
              </h1>
              <p className="font-normal text-[20px] leading-[30px] font-roboto text-neutral-700">
                {text}
              </p>
            </div>
            <div className=" flex flex-wrap gap-2 md:gap-10 md:w-[628px] w-[70%]">
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
