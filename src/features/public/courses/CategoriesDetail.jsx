import React from "react";
import DimaondGroup from "./DimaondGroup";
import BirdTwo from "../../../assets/ourCoursesPage/BirdTwo.png";

const CategoriesDetail = ({
  imgPeopleUrl,
  headerText,
  ParagText,
  DimaondGroupPositon,
  flexFlow,
  LgParagTex,
}) => {
  return (
    <div className="flex gap-5 py-24 flex-col">
      <div>
        {" "}
        <img src={BirdTwo} alt="" />
      </div>
      <div
        className={`flex relative  gap-4 justify-center items-center lg:flex-col-reverse ${flexFlow}`}
      >
        <div className=" lg:w-full xl:w-[545px] flex flex-col gap-4">
          <h1 className=" text-orange-600 font-poppin text-4xl  ">
            {headerText}
          </h1>
          <p className="xl:block lg:hidden font-roboto text-[20px] leading-[30px] font-normal text-neutral-700">
            {ParagText}
          </p>
          <p className="xl:hidden lg:block font-roboto text-[20px] leading-[30px] font-normal text-neutral-700">
            <div className=" flex gap-6 justify-center items-center">
              {LgParagTex.map((tex, index) => (
                <span key={index}>{tex}</span>
              ))}
            </div>
          </p>
        </div>
        <div>
          <div>
            <img src={imgPeopleUrl} alt="" />
          </div>
        </div>
        <div className={`absolute ${DimaondGroupPositon}`}>
          <DimaondGroup />
        </div>
      </div>
    </div>
  );
};

export default CategoriesDetail;
