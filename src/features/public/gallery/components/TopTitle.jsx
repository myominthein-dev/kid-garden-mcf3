import React, { useEffect, useRef } from "react";
import letterImg from "../../../../assets/gallery/letterFly.svg";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  containerVariants,
  imageVariants,
  titleVariants,
} from "../../../../utils";

const TopTitle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <motion.div
      variants={containerVariants}
      className=" flex justify-center flex-col items-center gap-4 relative"
    >
      <motion.h2
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={titleVariants}
        className=" text-xl leading-9 font-medium  font-pacifico"
      >
        Gallery
      </motion.h2>
      <motion.p
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={titleVariants}
        className=" xl:text-4xl text-xl font-poppin leading-[54px] font-semibold"
      >
        Our Colourful Journey
      </motion.p>
      <motion.img
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={imageVariants}
        className="  hidden xl:inline-block absolute bottom-[-85%] left-[10%] translate-x-64 translate-y-24  rotate-3  "
        src={letterImg}
        alt=""
      />
    </motion.div>
  );
};

export default TopTitle;
