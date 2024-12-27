import React, { useState } from "react";
import StarOrange from "../../../assets/ourCoursesPage/StarOrange.svg";
import StarPink from "../../../assets/ourCoursesPage/StarPink.svg";
import LanguageAndLiteracy from "../../../assets/ourCoursesPage/LanguageAndLiteracy.png";
import ArtsAndCreativity from "../../../assets/ourCoursesPage/ArtsAndCreativity.png";
import MathAndProblemSolving from "../../../assets/ourCoursesPage/MathAndProblemSolving.png";
import SocialDevelopment from "../../../assets/ourCoursesPage/SocialDevelopment.png";
import CourseCategoriesCard from "./courseCategoriesCard";
const CourseCategoriesMain = () => {
  const [courseCategoriesArray, setCourseCategoriesArray] = useState([
    {
      title: " Language and Literacy",
      imgUrl: LanguageAndLiteracy,
      out_let: "",
      activeColor: "bg-rose-100",
      active: true,
    },
    {
      title: "Arts and Creativity",
      imgUrl: ArtsAndCreativity,
      activeColor: "bg-orange-100",
      active: false,
      out_let: "arts-and-creativity",
    },
    {
      title: "Math and Problem-Solving",
      imgUrl: MathAndProblemSolving,
      out_let: "math-and-problem-solving",
      active: false,
      activeColor: " bg-fuchsia-100",
    },
    {
      title: "Social Development",
      imgUrl: SocialDevelopment,
      out_let: "social-development",
      active: false,
      activeColor: "bg-lime-100",
    },
  ]);
  return (
    <div className="relative flex flex-col py-24 gap-24 justify-center items-center w-full">
      {/* Categories */}
      <div>
        {/* star image */}
        <div>
          {" "}
          <img className=" absolute top-28 left-14" src={StarOrange} alt="" />
          <img className=" absolute top-36 right-32" src={StarPink} alt="" />
        </div>
        <div className="  flex justify-center items-center  gap-4 flex-col w-[618px]">
          <h3 className=" text-orange-500 font-normal text-xl font-pacifico">
            Course Categories
          </h3>
          <h1 className=" text-center text-4xl font-poppin font-semibold text-neutral-900">
            Building Foundations for Lifelong Learning
          </h1>
        </div>
      </div>

      <div className=" flex gap-6 items-center">
        {courseCategoriesArray.map((category, index) => (
          <CourseCategoriesCard
            category={category}
            courseCategoriesArray={courseCategoriesArray}
            key={index}
            setCourseCategoriesArray={setCourseCategoriesArray}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseCategoriesMain;
