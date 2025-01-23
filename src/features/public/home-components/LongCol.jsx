import {React, useRef} from "react";
import { useInView,useAnimation,motion } from "framer-motion";
import { categoryVariants, itemVariants } from "../../../utils";
const LongCol = ({ src, className }) => {
  const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const controls = useAnimation()
  
    if (isInView) {
      controls.start('visible')
    }
  return (
    <div className={`grid grid-rows-subgrid gap-4 row-span-2 ${className}`}>
      <div className=" row-start-1 row-end-3 rounded-xl overflow-hidden">
        <motion.img ref={ref} initial='hidden' animate={controls} variants={categoryVariants} className=" h-full w-full " src={src} alt />
      </div>
    </div>
  );
};

export default LongCol;
