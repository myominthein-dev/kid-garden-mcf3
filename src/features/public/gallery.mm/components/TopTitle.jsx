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
        className=" text-xl leading-9 font-normal text-orange-500 font-pacifico"
      >
        ဓာတ်ပုံများ
      </motion.h2>
      <motion.p
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={titleVariants}
        className=" xl:text-4xl text-2xl font-poppin leading-[54px] font-semibold"
      >
        အမှတ်တရရက်စွဲများ{" "}
      </motion.p>
      <motion.img
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={imageVariants}
        className="  hidden xl:inline-block absolute bottom-2 left-0 translate-x-44 translate-y-24 rotate-3 "
        src={letterImg}
        alt=""
      />
    </motion.div>
  );
};

export default TopTitle;
