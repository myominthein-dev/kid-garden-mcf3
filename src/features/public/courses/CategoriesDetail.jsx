import React, {useRef} from "react";
import DimaondGroup from "./DimaondGroup";
import BirdTwo from "../../../assets/ourCoursesPage/BirdTwo.png";
import { useAnimation, useInView, motion } from "framer-motion";
import { containerVariants, imageVariants, titleVariants } from "../../../utils";

const CategoriesDetail = ({
  imgPeopleUrl,
  headerText,
  ParagText,
  DimaondGroupPositon,
  flexFlow,
  LgParagTex,
}) => {

  const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const controls = useAnimation();

 
  if (isInView) {
    controls.start('visible')
  }
  return (
    <motion.div ref={ref} initial='hidden' animate={controls} variants={containerVariants} className="flex gap-5 py-24 flex-col">
      <div>
        {" "}
        <motion.img ref={ref} initial='hidden' animate={controls} variants={imageVariants} src={BirdTwo} alt="" />
      </div>
      <div
        className={`flex relative  gap-4 justify-center items-center flex-col-reverse md:flex-col-reverse ${flexFlow}`}
      >
        <div className=" md:w-full xl:w-[545px] flex flex-col gap-4">
          <motion.h1 v variants={titleVariants} className=" text-orange-600 font-poppin text-4xl  ">
            {headerText}
          </motion.h1>
          <motion.p ref={ref} initial='hidden' animate={controls} variants={titleVariants} className="xl:block md:hidden font-roboto text-[20px] leading-[30px] font-normal text-neutral-700">
            {ParagText}
          </motion.p>
          <p className="xl:hidden hidden md:block font-roboto text-[20px] leading-[30px] font-normal text-neutral-700">
            <div className=" flex gap-6 justify-center items-center">
              {LgParagTex.map((tex, index) => (
                <motion.span ref={ref} initial='hidden' animate={controls} variants={titleVariants} key={index}>{tex}</motion.span>
              ))}
            </div>
          </p>
        </div>
        <div>
          <div>
            <motion.img ref={ref} initial='hidden' animate={controls} variants={imageVariants} src={imgPeopleUrl} alt="" />
          </div>
        </div>
        <div className={`absolute ${DimaondGroupPositon}`}>
          <DimaondGroup />
        </div>
      </div>
    </motion.div>
  );
};

export default CategoriesDetail;
