import {React, useRef } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import DetailBtn from "../home-components/DetailBtn";
import { motion, useAnimation, useInView } from 'framer-motion'
import { titleVariants } from "../../../utils";

const HomeGalleryTitle = () => {
  const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const controls = useAnimation()
  
    if (isInView) {
      controls.start('visible')
    }
  return (
    <div className=" flex justify-between items-end relative ">
      <div className=" flex flex-col gap-4">
        <motion.h1 animate={controls} ref={ref} initial='hidden' variants={titleVariants}  className=" font-pacifico text-xl text-orange-500 font-medium leading-9">
        ဓာတ်ပုံစုစည်းမှု
        </motion.h1>
        <motion.p animate={controls} ref={ref} initial='hidden' variants={titleVariants} className=" font-poppin md:text-4xl text-2xl  leading-[54px] text-neutral-900 font-bold">
        အတူတကွ ရရှိထားသော <br /> အောင်မြင်မှုမှတ်တမ်းများ
        </motion.p>
      </div>
      <div className=" hidden md:flex   ">
        <DetailBtn content={"ဓာတ်ပုံအားလုံးကို ကြည့်ရှုပါ"} />
      </div>
    </div>
  );
};

export default HomeGalleryTitle;
