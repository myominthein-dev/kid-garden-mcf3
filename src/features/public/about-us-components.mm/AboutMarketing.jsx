import React, { useRef } from "react";
import Container from "../components/Container";
import AboutMarketingGroup from "./AboutMarketingGroup";
import StarOrange from "../../../assets/ourCoursesPage/StarOrange.svg";
import StarPink from "../../../assets/ourCoursesPage/StarPink.svg";
import abc from "../../../assets/contactUsPage/abc.svg";
import arrow from "../../../assets/contactUsPage/arrow.svg";
import notation from "../../../assets/contactUsPage/notation.png";
import { motion, useInView, useAnimation } from "framer-motion";
import { itemVariants, titleVariants } from "../../../utils";
const AboutMarketing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }
  return (
    <section className="bg-[#FEF5DB]">
      <Container>
        <div className="relative flex flex-col py-32 gap-24 justify-center items-center w-full min-h-screen ">
          <>
            <motion.img
              src={StarOrange}
              alt="starOrange"
              className=" absolute top-8 left-16 h-10"
              initial={{ x: 0, y: -10 }}
              animate={{ x: 0, y: 10 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.img
              src={StarPink}
              alt="starPink"
              className=" absolute bottom-16 md:bottom-80 lg:bottom-24 left-48 lg:left-48 md:left-56  h-10"
              initial={{ x: 0, y: -10 }}
              animate={{ x: 0, y: 10 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.img
              src={notation}
              alt="notation"
              className="absolute top-16 lg:top-24 right-0 left-0 mx-auto h-20 hidden md:inline-block"
              initial={{ x: 10, y: -5 }}
              animate={{ x: 0, y: 0 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-5 w-full">
            <div className="w-full">
              <AboutMarketingGroup />
            </div>
            <div className="w-full px-2 lg:px-20 ">
              <motion.img
                src={abc}
                alt="abc"
                className=" absolute -inset-2top-0 right-[40%] md:top-4 md:right-10 h-28"
                initial={{ x: 12, y: -5 }}
                animate={{ x: 0, y: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className=" ms-4 flex flex-col gap-5 md:gap-7 items-center md:items-start justify-center pt-24 md:pt-0 mt-10 md:mt-0 w-full md:w-[50%] lg:w-auto">
                <motion.h1
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={titleVariants}
                  className="font-poppin font-semibold text-xl sm:3xl md:text-4xl text-center md:text-start"
                >
                  အရည်အသွေးအာမခံချက်
                </motion.h1>
                <motion.p
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={titleVariants}
                  className="font-roboto text-base w-72 leading-[30px] text-gray-700  text-center md:text-start"
                >
                  စနစ်တကျစစ်ဆေးပြီး၊ ရလဒ်အပြည့်အဝ တာဝန်ယူမှုရှိစွာပေးဆောင်ပါသည်။
                </motion.p>
                <motion.button
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={itemVariants}
                  className="bg-orange-500 px-6 py-3 rounded-full text-white"
                >
                  ဆက်သွယ်ရန်
                </motion.button>
              </div>
              <motion.img
                src={arrow}
                alt="arrow"
                className=" absolute bottom-56 right-96 h-24 hidden xl:inline-block"
                initial={{ x: -5, y: -10 }}
                animate={{ x: 0, y: 0 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMarketing;
