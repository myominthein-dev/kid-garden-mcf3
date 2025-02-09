import React, { useRef } from "react";
import LearnSkill from "./LearnSkill";
import backGroundImg from "../../../assets/ourCoursesPage/Background.png";
import { motion, useInView, useAnimation } from "framer-motion";
import { imageVariants, titleVariants } from "../../../utils";
const WhatYourKidWillLearn = ({ ImageUrl, text, learningSkill, flexFlow }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }
  return (
    <div className=" relative ">
      <div>
        <motion.img
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
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
            <motion.img
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              className=" md:w-full"
              src={ImageUrl}
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-12 xl:w-[628px] md:w-[80%] w-[90%] ">
            <div className=" flex flex-col gap-4">
              <motion.h1
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={titleVariants}
                className="font-semibold text-[36px] leading-[54px] font-poppin text-orange-600"
              >
                အဓိက ဘာသာရပ်များ
              </motion.h1>
              <motion.p
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={titleVariants}
                className="font-normal text-[20px] leading-[30px] font-roboto text-neutral-700"
              >
                {text}
              </motion.p>
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
