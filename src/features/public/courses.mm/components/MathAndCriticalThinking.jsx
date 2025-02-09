import React, { useRef, useEffect } from "react";
import Container from "../../components/Container";
import potato from "../../../../assets/coursePage/potato_1.png";
import outerPotato from "../../../../assets/coursePage/outer_potato.png";
import drawing from "../../../../assets/coursePage/drawing.png";
import yellowGirlDrawing from "../../../../assets/coursePage/yellow_girl_drawing.png";
import pattern from "../../../../assets/coursePage/pattern.png";
import yellowBaby from "../../../../assets/coursePage/yellow_baby_play.png";
import redBaby from "../../../../assets/coursePage/red_baby_play.png";
import triangles from "../../../../assets/coursePage/triangles.png";
import greenCloud from "../../../../assets/coursePage/green_cloud.png";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  containerVariants,
  imageVariants,
  titleVariants,
} from "../../../../utils";
const MathAndCriticalThinking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <Container className={"my-16 py-5"}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-[1183px]  relative  mx-auto"
      >
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className="font-poppin md:w-[618px] w-full mx-auto font-semibold leading-10 text-4xl text-center"
        >
          သင်္ချာနှင့်လေ့လာခြင်း
        </motion.h1>
      </motion.div>
      <div className="mt-20  ">
        <div className="relative h-[500px] md:h-[600px]  flex items-center justify-end md:justify-center gap-10 ">
          <div className="absolute  top-0 right-28">
            <motion.img
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              className="size-14 top-3  absolute  z-20"
              src={potato}
              alt=""
            />
            <motion.img
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              className="size-16   "
              src={outerPotato}
              alt=""
            />
          </div>
          <motion.img
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className="absolute bottom-0 md:-bottom-12 xl:left-4 left-0"
            src={greenCloud}
          />
          <motion.img
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className="absolute left-0 xl:left-[80px] top-1"
            src={triangles}
          />
          <motion.img
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className=" xl:w-[519px] left-3 top-3  absolute md:relative w-[55%] md:w-[45%] h-[400px] z-20 md:h-[554px] "
            src={yellowBaby}
            alt=""
          />
          <motion.img
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className=" xl:w-[519px] w-[55%] md:w-[45%] md:z-20 md:h-[554px] h-[400px] relative md:top-24"
            src={redBaby}
          />
        </div>
      </div>
    </Container>
  );
};

export default MathAndCriticalThinking;
