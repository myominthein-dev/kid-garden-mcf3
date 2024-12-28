import React from "react";
import BirdTwo from "../../../../../assets/ourCoursesPage/BirdTwo.png";
import People from "../../../../../assets/ourCoursesPage/People.png";
import GroupStar from "../../../../../assets/ourCoursesPage/GroupStar.png";

const LanguageAndLiteracyPage = () => {
  return (
    <div>
      <div className=" flex flex-col gap-5 py-24">
        <div>
          {" "}
          <img src={BirdTwo} alt="" />
        </div>
        <div className=" flex justify-center items-center ">
          <div className=" w-[545px] flex flex-col gap-4">
            <h1 className=" text-orange-600 font-poppin text-4xl  ">
              Language and Literacy
            </h1>
            <p className=" font-roboto text-[20px] leading-[30px] font-normal text-neutral-700">
              We focuses on helping young children develop foundational
              communication skills, including speaking, listening, reading, and
              writing. Through storytelling, phonics, and vocabulary-building
              activities, children learn to express themselves, understand
              others, and explore the joy of language. These skills lay the
              groundwork for academic success and lifelong learning.
            </p>
          </div>
          <div className=" relative">
            <div className=" absolute top-0 left-0">
              <img src={GroupStar} alt="" />
            </div>
            <div>
              <img src={People} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageAndLiteracyPage;
