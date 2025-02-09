import React, { useRef, useEffect } from "react";
import Container from "../../components/Container";
import potato from "../../../../assets/coursePage/potato_1.png";
import outerPotato from "../../../../assets/coursePage/outer_potato.png";
import handRaisingKid from "../../../../assets/coursePage/hadng_raising_kid.png";
import drawingKid from "../../../../assets/coursePage/kid_drawing.png";
import drawing from "../../../../assets/coursePage/drawing.png";
import yellowGirlDrawing from "../../../../assets/coursePage/yellow_girl_drawing.png";
import pattern from "../../../../assets/coursePage/pattern.png";
import sun from "../../../../assets/coursePage/sun.png";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  containerVariants,
  imageVariants,
  titleVariants,
} from "../../../../utils";
const ArtCreativity = () => {
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
        <motion.img
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="absolute -bottom-full left-[50%] md:top-0 md:left-0"
          src={sun}
          alt=""
        />
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className="font-poppin md:w-[618px] w-full mx-auto font-semibold leading-10 text-4xl text-center"
        >
          အနုပညာနှင့်ဖန်တီးမှုမှတဆင့်ဖော်မြူခြင်း
        </motion.h1>
      </motion.div>
      <div className="mt-20  ">
        <div className="relative h-[600px] md:items-start  flex xl:items-center justify-center gap-10 ">
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
            className="absolute bottom-0 right-0 md:right-[5%] md:w-[40%]"
            src={pattern}
            alt=""
          />
          <motion.img
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className=" xl:w-[519px] w-[45%] z-20 md:h-[607px] h-[40%] md:relative absolute bottom-0 left-0  "
            src={drawing}
            alt=""
          />
          <motion.img
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className=" xl:w-[569px] md:w-[45%] w-full z-20 h-[351px]"
            src={yellowGirlDrawing}
          />
        </div>
      </div>
    </Container>
  );
};

export default ArtCreativity;
