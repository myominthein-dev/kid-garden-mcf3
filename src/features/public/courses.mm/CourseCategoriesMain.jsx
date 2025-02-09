import React, { useState, useRef, useEffect } from "react";
import StarOrange from "../../../assets/ourCoursesPage/StarOrange.svg";
import StarPink from "../../../assets/ourCoursesPage/StarPink.svg";
import { motion, useInView, useAnimation } from "framer-motion";
import CourseCategoriesCard from "./CourseCategoriesCard";
import Ellipse from "../components/Ellipse";
import { LuBrainCircuit, LuCodepen, LuPuzzle, LuSlack } from "react-icons/lu";
import { itemVariants, titleVariants } from "../../../utils";

const CourseCategoriesMain = () => {
  const [courseCategoriesArray, setCourseCategoriesArray] = useState([
    {
      title: "ဘာသာစကားနှင့် ယဉ်ကျေးမှု",
      icon: (
        <LuBrainCircuit className="text-white  w-[30px] h-[30px] border-none" />
      ),
      out_let: "",
      activeColor: "bg-rose-100",
      active: true,
      iconColor: "#FDA4AF",
    },
    {
      title: "ကိုယ်ပိုင်သင်ယူမှုစွမ်းရည်များ ",
      icon: <LuCodepen className="text-white w-[30px] h-[30px] border-none" />,
      activeColor: "bg-orange-100",
      active: false,
      out_let: "arts-and-creativity",
      iconColor: "#FB923C",
    },
    {
      title: "သင်္ချာနှင့်လေ့လာခြင်း",
      icon: <LuPuzzle className="text-white w-[30px] h-[30px] border-none" />,
      out_let: "math-and-problem-solving",
      active: false,
      iconColor: "#F0ABFC",
      activeColor: " bg-fuchsia-100",
    },
    {
      title: "ဒီဂျစ်တယ်ပညာရေး",
      icon: <LuSlack className="text-white w-[30px] h-[30px] border-none" />,
      out_let: "social-development",
      active: false,
      iconColor: "#A3E635",
      activeColor: "bg-lime-100",
    },
  ]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }

  return (
    <div className="relative flex flex-col py-24 gap-24 justify-center items-center w-full">
      {/* Categories */}
      <div>
        {/* star image */}
        <div>
          {" "}
          <motion.img
            animate={controls}
            variants={itemVariants}
            ref={ref}
            initial="hidden"
            className=" absolute top-0 md:top-28 left-14"
            src={StarOrange}
            alt=""
          />
          <motion.img
            animate={controls}
            variants={itemVariants}
            ref={ref}
            initial="hidden"
            className=" absolute right-0  top-10 md:top-36 xl:right-32 md:right-[7%]"
            src={StarPink}
            alt=""
          />
        </div>
        <div className="  flex justify-center items-center  gap-4 flex-col w-[75%] mx-auto md:w-[618px]">
          <motion.h2
            initial="hidden"
            ref={ref}
            animate={controls}
            variants={titleVariants}
            className=" text-orange-500 font-normal text-xl font-pacifico"
          >
            သင်တန်းအမျိုးအစားများ
          </motion.h2>
          <motion.h2
            initial="hidden"
            ref={ref}
            animate={controls}
            variants={titleVariants}
            className=" text-[24px]  text-center xl:text-[36px] font-poppin font-semibold text-neutral-900"
          >
            တစ်သက်တာသင်ယူမှုအတွက် အခြေခံများ တည်ဆောက်ကြပါစို့
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
