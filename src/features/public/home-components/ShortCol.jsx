import {React, useRef} from "react";
import { useInView,useAnimation,motion } from "framer-motion";
import { categoryVariants, itemVariants } from "../../../utils";


const ShortCol = ({ src, className }) => {
  const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const controls = useAnimation()
  
    if (isInView) {
      controls.start('visible')
    }
  return (
    <div className={`w-full ${className} rounded-xl overflow-hidden `}>
      <motion.img ref={ref} initial='hidden' animate={controls} variants={categoryVariants} className=" h-full" src={src} alt />
    </div>
  );
};

export default ShortCol;
