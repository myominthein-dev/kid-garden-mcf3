import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Container from "../../components/Container";
import potato from "../../../../assets/coursePage/potato_1.png";
import outerPotato from "../../../../assets/coursePage/outer_potato.png";
import handRaisingKid from "../../../../assets/coursePage/hadng_raising_kid.png";
import drawingKid from "../../../../assets/coursePage/kid_drawing.png";
import sunFlower from "../../../../assets/coursePage/sun_flower.png";
import sun from "../../../../assets/coursePage/sun.png";
import {
  containerVariants,
  floatingVariants,
  imageVariants,
  itemVariants,
  rotatingVariants,
  titleVariants,
} from "../../../../utils";

const LangLiteracy = () => {
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
        className="max-w-[1183px] max-sm:w-full relative mx-auto"
      >
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="md:block hidden absolute left-0 bottom-0 z-20"
        >
          <motion.img
            src={potato}
            alt="Decorative potato"
            width={56}
            height={56}
          />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="md:block hidden absolute left-0 bottom-2"
        >
          <motion.img
            src={outerPotato}
            alt="Decorative outer potato"
            width={64}
            height={64}
          />
        </motion.div>
        <motion.h1
          variants={titleVariants}
          className="font-poppin md:w-[618px] mx-auto font-semibold leading-10 text-4xl text-center"
        >
          "Building Strong Foundations in Language and Literacy"
        </motion.h1>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="mt-20"
      >
        <div className="relative h-[600px] flex items-center justify-center">
          <motion.div
            variants={rotatingVariants}
            initial="initial"
            animate="animate"
            className="absolute max-sm:left-0 max-sm:top-0 right-20 top-5"
          >
            <motion.img
              src={sun}
              alt="Decorative sun"
              width={100}
              height={100}
            />
          </motion.div>
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="absolute bottom-0"
          >
            <motion.img
              src={sunFlower}
              alt="Decorative sunflower"
              width={200}
              height={200}
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white max-sm:absolute max-sm:top-[50%] max-sm:left-[10%] rounded-full px-12 py-3 z-30"
          >
            <h3 className="text-[#FF9E0E] text-4xl">1.7K</h3>
            <motion.p
              variants={itemVariants}
              className="leading-9 text-lg text-[#333931]"
            >
              Enrolled Student
            </motion.p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-[570px] max-sm:rotate-[9deg] h-[349px] absolute top-16 left-36 max-sm:w-[85%] max-sm:top-0 max-sm:left-0 max-sm:relative max-sm:h-[400px]"
          >
            <motion.img
              variants={imageVariants}
              src={drawingKid}
              alt="Kid drawing"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-[543px] max-sm:w-[40%] max-sm:-rotate-3 max-sm:object-fill max-sm:h-[386px] h-[332px] max-sm:right-[10%] max-sm:top-[25%] absolute bottom-16 right-36"
          >
            <motion.img
              variants={imageVariants}
              src={handRaisingKid}
              alt="Kid raising hand"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};

export default LangLiteracy;
