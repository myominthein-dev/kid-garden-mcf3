import React, { useEffect, useState, useRef } from "react";
import Container from "./Container";
import NewsLetter from "./NewsLetter";
import footerLogo from "../../../assets/homePage/footer_tinyverse.png";
import { useNavigate } from "react-router-dom";
import {motion, useInView, useAnimation} from 'framer-motion'
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";
import { itemVariants, titleVariants } from "../../../utils";

const Footer = ({ bgImg, color }) => {
  const nav = useNavigate();
  const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const controls = useAnimation()
  
    if (isInView) {
      controls.start('visible')
    }
  const link = (path) => {
    nav(path);
  };
  return (
    <footer
      style={{ backgroundImage: `url(${bgImg})` }}
      className={` xl:h-[832px]   bg-[url()] bg-cover object-cover  bg-no-repeat pt-52 pb-24   border-gray-200  dark:bg-gray-800 mt-auto relative xl:px-0 md:px-8 flex items-center flex-col justify-center`}
    >
      <Container>
        <NewsLetter color={color} />

        <div className="max-w-[561px] mx-auto relative gap-2.5  ">
          <div className="flex items-center justify-center">
            <img src={footerLogo} />
          </div>
          <motion.p ref={ref} initial='hidden'animate={controls} variants={titleVariants} className="font-roboto  md:px-40 px-24 text-xs my-5 text-center text-neutral-700">
            "Find the perfect class tailored to your child's needs and
            interests."
          </motion.p>
          <ul
            className={`text-${color}-600 flex xl:gap-8 gap-4 xl:text-base  text-xs items-center  justify-center leading-4 font-semibold`}
          >
            <motion.li ref={ref} initial='hidden' animate={controls} variants={titleVariants} onClick={() => link("/")} className="cursor-pointer">
              Home
            </motion.li>
            <motion.li ref={ref} initial='hidden' animate={controls} variants={titleVariants} onClick={() => link("/about-us")} className="cursor-pointer">
              About Us
            </motion.li>
            <motion.li ref={ref} initial='hidden' animate={controls} variants={titleVariants} onClick={() => link("/our-courses")} className="cursor-pointer">
              Courses
            </motion.li>
            <motion.li ref={ref} initial='hidden' animate={controls} variants={titleVariants} onClick={() => link("/contact-us")} className="cursor-pointer">
              Contact Us
            </motion.li>
            <motion.li ref={ref} initial='hidden'animate={controls} variants={titleVariants}
              onClick={() => link("/upcoming-events")}
              className="cursor-pointer"
            >
              Events
            </motion.li>
          </ul>

          <div
            className={`max-w-[144px] text-${color}-600 flex justify-evenly mx-auto my-5`}
          >
            <LuTwitter size={25} />
            <LuFacebook size={25} />
            <LuInstagram size={25} />
          </div>

          <motion.p ref={ref} initial='hidden'animate={controls} variants={titleVariants} className="font-roboto leading-4 text-center">
            © 2024 Tinyverse. All Rights Reserved.
          </motion.p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
