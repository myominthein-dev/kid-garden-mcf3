import React, { useRef } from "react";
import Container from "../components/Container";
import ContactFaqGroup from "./ContactFaqGroup";
import earth from "../../../assets/contact/earth.svg";
import { motion, useInView, useAnimation } from "framer-motion";
import { titleVariants } from "../../../utils";
const ContactUsFaqSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }
  return (
    <Container>
      <div className=" flex flex-col pt-12 pb-24 gap-14 md:gap-20  items-center w-full h-full relative">
        <>
          <motion.img
            src={earth}
            alt="earth"
            className="absolute md:top-32 lg:top-20 md:left-0 lg:left-16 hidden md:inline-block"
            initial={{ x: -15, y: -10 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </>
        <div className="   flex justify-center items-start sm:items-center  gap-4 flex-col w-full">
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            className=" text-orange-500 font-normal text-xl font-pacifico"
          >
            အကြံပြုချက်များ
          </motion.h1>
          <motion.h3
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            className=" text-2xl sm:text-3xl md:text-4xl font-poppin font-semibold text-neutral-900"
          >
            မေးလေ့ရှိသောမေးခွန်းများ
          </motion.h3>
        </div>
        <div className=" w-full sm:w-[70%] md:w-[60%] flex justify-center items-center h-full">
          <ContactFaqGroup />
        </div>
      </div>
    </Container>
  );
};

export default ContactUsFaqSection;
