import React, { useState,useRef,useEffect} from "react";
import StarOrange from "../../../assets/ourCoursesPage/StarOrange.svg";
import StarPink from "../../../assets/ourCoursesPage/StarPink.svg";
import {motion, useInView,  useAnimation} from 'framer-motion'
import CourseCategoriesCard from "./CourseCategoriesCard";
import Ellipse from "../components/Ellipse";
import { LuBrainCircuit, LuCodepen, LuPuzzle, LuSlack } from "react-icons/lu";
import { itemVariants, titleVariants } from "../../../utils";

const CourseCategoriesMain = () => {
  const [courseCategoriesArray, setCourseCategoriesArray] = useState([
    {
      title: " Language and Literacy",
      icon: (
        <LuBrainCircuit className="text-white  w-[30px] h-[30px] border-none" />
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

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  
    if (isInView) {
      controls.start('visible')
    }
 
  

  return (
    <div className="relative flex flex-col py-24 gap-24 justify-center items-center w-full">
      {/* Categories */}
      <div>
        {/* star image */}
        <div>
          {" "}
          <motion.img animate={controls} variants={itemVariants} ref={ref} initial='hidden'
            className=" absolute top-0 md:top-28 left-14"
            src={StarOrange}
            alt=""
          />
          <motion.img animate={controls} variants={itemVariants} ref={ref} initial="hidden"
            className=" absolute right-0  top-10 md:top-36 xl:right-32 md:right-[7%]"
            src={StarPink}
            alt=""
          />
        </div>
        <div className="  flex justify-center items-center  gap-4 flex-col w-[75%] mx-auto md:w-[618px]">
          <motion.h2 initial='hidden' ref={ref} animate={controls} variants={titleVariants} className=" text-orange-500 font-normal text-xl font-pacifico">
            Course Categories
          </motion.h2>
          <motion.h2 initial='hidden' ref={ref} animate={controls} variants={titleVariants} className=" text-[24px]  leading-[34px] text-center xl:text-4xl font-poppin font-semibold text-neutral-900">
            Building Foundations for Lifelong Learning
          </motion.h2>
        </div>
      </div>

      <div className=" flex flex-wrap gap-8 md:gap-6 items-center justify-center">
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
