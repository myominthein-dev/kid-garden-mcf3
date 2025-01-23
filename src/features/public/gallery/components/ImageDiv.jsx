import { useRef, useEffect } from "react";
import {motion, useAnimation, useInView} from 'framer-motion'
import { containerVariants, imageVariants, itemVariants } from "../../../../utils";
const ImageDiv = ({ className, src }) => {
  const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const controls = useAnimation();

 
  useEffect(() => {
       if (isInView) {
         controls.start("visible");
       }
     }, [isInView, controls]);
   
  return (
    <>
      <motion.div variants={containerVariants}
        className={`border-2 border-dashed rounded-2xl border-opacity-50 overflow-hidden h-full ${className} `}
      >
        <motion.img initial='hidden' ref={ref} animate={controls} variants={itemVariants} className=" h-full w-full object-cover" src={src} alt="" />
      </motion.div>
    </>
  );
};

export default ImageDiv;
