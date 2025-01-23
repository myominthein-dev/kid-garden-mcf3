import React, {useRef} from "react";
import VectorImg from "../../../assets/ourCoursesPage/Vector.png";
import {motion, useInView , useAnimation} from 'framer-motion'
import { imageVariants, titleVariants } from "../../../utils";
const LearnSkill = ({ skill }) => {
  const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const controls = useAnimation();

 
  if (isInView) {
    controls.start('visible')
  }
  return (
    <div className=" flex gap-4 items-center ">
      <motion.img ref={ref} initial='hidden' animate={controls} variants={imageVariants} src={VectorImg} alt="" />
      <motion.p ref={ref} initial='hidden' animate={controls} variants={titleVariants} className=" font-normal font-pacifico text-neutral-900 text-base text-nowrap md:text-[22px] leading-[35px]">
        {skill}
      </motion.p>
    </div>
  );
};

export default LearnSkill;
