import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Ellipse from "../components/Ellipse";
import { useInView, motion, useAnimation } from "framer-motion";
import { categoryVariants, titleVariants } from "../../../utils";
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

  const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const controls = useAnimation();

 
  if (isInView) {
    controls.start('visible')
  }
  
  return (
    <NavLink
      to={category.out_let}
      onClick={colorChangeFun}
      className={`transition-colors  ease-in-out duration-500`}
    >
      <motion.div ref={ref} initial='hidden' animate={controls} variants={categoryVariants}
        className={` ${
          category.active ? category.activeColor : "bg-white"
        } w-[200px] h-[242px]  cursor-pointer flex flex-col justify-evenly  items-center md:w-[300px] md:py-[20px] md:px-[5px] lg:w-[466px] xl:w-[302px] border xl:h-[139px] lg:py-[30px] lg:px-[10px] lg:gap-8  rounded-xl border-dashed   border-neutral-900 xl:py-[10px]`}
      >
        <Ellipse
          initial="39% 61% 50% 50% / 37% 40% 60% 63%"
          isAnimate={true}
          width="80px"
          height="80px"
          shadow={true}
          bgColor={category.iconColor}
          borderColor={category.iconColor}
        >
          {category.icon}
        </Ellipse>
        <motion.h2 ref={ref} initial='hidden' animate={controls} variants={titleVariants}  className=" font-pacifico w-[80%] md:w-full text-center font-normal text-xl text-neutral-900">
          {category.title}
        </motion.h2>
      </motion.div>
    </NavLink>
  );
};

export default CourseCategoriesCard;
