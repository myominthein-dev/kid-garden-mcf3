import React, { useState } from "react";
import StarOrange from "../../../assets/ourCoursesPage/StarOrange.svg";
import StarPink from "../../../assets/ourCoursesPage/StarPink.svg";

import CourseCategoriesCard from "./courseCategoriesCard";
import Ellipse from "../components/Ellipse";
import { LuBrainCircuit, LuCodepen, LuPuzzle, LuSlack } from "react-icons/lu";
const CourseCategoriesMain = () => {
  const [courseCategoriesArray, setCourseCategoriesArray] = useState([
    {
      title: " Language and Literacy",
      icon: (
        <LuBrainCircuit className="text-white w-[30px] h-[30px] border-none" />
      ),
      out_let: "",
      activeColor: "bg-rose-100",
      active: true,
      iconColor: "#FDA4AF",
    },
    {
      title: "Arts and Creativity",
      icon: <LuCodepen className="text-white w-[30px] h-[30px] border-none" />,
      activeColor: "bg-orange-100",
      active: false,
      out_let: "arts-and-creativity",
      iconColor: "#FB923C",
    },
    {
      title: "Math and Problem-Solving",
      icon: <LuPuzzle className="text-white w-[30px] h-[30px] border-none" />,
      out_let: "math-and-problem-solving",
      active: false,
      iconColor: "#F0ABFC",
      activeColor: " bg-fuchsia-100",
    },
    {
      title: "Social Development",
      icon: <LuSlack className="text-white w-[30px] h-[30px] border-none" />,
      out_let: "social-development",
      active: false,
      iconColor: "#A3E635",
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
