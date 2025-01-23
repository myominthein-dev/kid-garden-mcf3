import React,{useRef} from "react";
import {motion, useInView, useAnimation} from "framer-motion"
import { itemVariants } from "../../../utils";
const AboutHeroList = ({ content: { id, title, description, image } }) => {
  
  const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const controls = useAnimation()
  
    if (isInView) {
      controls.start('visible')
    }

  return (
    <motion.div ref={ref} animate={controls} initial='hidden' variants={itemVariants} className="flex justify-center items-start gap-3 lg:gap-5">
      <div className="flex justify-center items-center">
        <motion.img ref={ref} initial='hidden' animate={controls} src={image} alt={title} className=" rounded-lg w-auto md:w-40 " />
      </div>
      <div className="flex flex-col  justify-center gap-3 lg:gap-5">
        <motion.h3 
          className={`font-pacifico text-lg md:text-xl ${
            id === 1
              ? " text-orange-500"
              : id === 2
              ? "text-lime-400"
              : id === 3
              ? " text-yellow-300"
              : ""
          }`}
        >
          {title}
        </motion.h3>
        <p className=" w-auto lg:w-[80%] text-base lg:text-[20px] leading-[30px] text-gray-700">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutHeroList;
