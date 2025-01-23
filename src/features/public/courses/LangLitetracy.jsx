import React, {useRef} from "react";
import Container from "../components/Container";
import potato from "../../../../assets/coursePage/potato_1.png";
import outerPotato from "../../../../assets/coursePage/outer_potato.png";
import {motion, useInView, useAnimation} from 'framer-motion'
import { titleVariants } from "../../../utils";

const LangLitetracy = () => {
  const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const controls = useAnimation();

 
  if (isInView) {
    controls.start('visible')
  }
  return (
    <Container>
      <div className="max-w-[1183px] relative bg-red-300 mx-auto">
        <img src="" alt="" />
        <motion.h2  animate={controls} variants={titleVariants} ref={ref} initial='hidden' className="font-poppin w-[618px] mx-auto font-semibold leading-10 text-4xl text-center">
          "Building Strong Foundations in Language and Literacy”
        </motion.h2>
      </div>
    </Container>
  );
};

export default LangLitetracy;
