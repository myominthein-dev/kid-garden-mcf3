import React, {useRef} from "react";
import OrangeDiamond from "../../../assets/ourCoursesPage/OrangeDiamond.png";
import PinkDiamond from "../../../assets/ourCoursesPage/PinkDiamond.png";
import GreenDiamond from "../../../assets/ourCoursesPage/GreenDiamond.png";
import {motion,useInView,useAnimation} from "framer-motion"
import { imageVariants } from "../../../utils";
const DimaondGroup = () => {
  const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const controls = useAnimation();

 
  if (isInView) {
    controls.start('visible')
  }
  return (
    <div className="  w-[73px]">
      <motion.img ref={ref} initial='hidden' animate={controls} variants={imageVariants} className=" ml-auto" src={PinkDiamond} alt="" />
      <motion.img ref={ref} initial='hidden' animate={controls} variants={imageVariants} className=" " src={OrangeDiamond} alt="" />
      <motion.img ref={ref} initial='hidden' animate={controls} variants={imageVariants} className=" ml-auto" src={GreenDiamond} alt="" />
    </div>
  );
};

export default DimaondGroup;
