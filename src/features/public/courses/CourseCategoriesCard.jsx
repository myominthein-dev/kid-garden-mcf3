import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CourseCategoriesCard = ({
  category,
  setCourseCategoriesArray,
  courseCategoriesArray,
}) => {
  const colorChangeFun = () => {
    setCourseCategoriesArray(
      courseCategoriesArray.map((ele) => {
        if (ele.title == category.title) {
          ele.active = true;
        } else {
          ele.active = false;
        }
        return ele;
      })
    );
  };
  return (
    <NavLink
      to={category.out_let}
      onClick={colorChangeFun}
      className={`transition-colors  ease-in-out duration-500 ${
        category.active ? category.activeColor : "bg-white"
      }`}
    >
      <div className=" cursor-pointer flex flex-col justify-center items-center w-[302px] border h-[139px]  rounded-xl border-dashed   border-neutral-900 py-[10px]">
        <img className=" w-20" src={category.imgUrl} alt="" />
        <h2 className=" font-pacifico font-normal text-xl text-neutral-900">
          {category.title}
        </h2>
      </div>
    </NavLink>
  );
};

export default CourseCategoriesCard;
