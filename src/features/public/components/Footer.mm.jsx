import React, { useEffect, useState, useRef } from "react";
import Container from "./Container";
import NewsLetter from "./NewsLetter.mm";
import footerLogo from "../../../assets/homePage/footer_tinyverse.png";
import { useNavigate } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";
import { itemVariants, titleVariants } from "../../../utils";

const routerPath = [
  { PageName: "ပင်မစာမျက်နှာ", PagePath: "/mm" },
  { PageName: "ကျွန်ုပ်တို့၏သင်ရိုးများ", PagePath: "/mm/our-courses" },
  { PageName: "ဓာတ်ပုံများ", PagePath: "/mm/gallery" },
  { PageName: "  ကျွန်ုပ်တို့အကြောင်း", PagePath: "/mm/about-us" },
  { PageName: " ဆက်သွယ်ရန်", PagePath: "/mm/contact-us" },
];

const Footer = ({ bgImg, color }) => {
  const nav = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
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

        <div className="max-w-[861px] mx-auto relative gap-2.5  ">
          <div className="flex items-center justify-center">
            <img src={footerLogo} />
          </div>
          <motion.p
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            className="font-roboto  md:px-40 px-24 text-xs my-5 text-center text-neutral-700"
          >
            ကျွန်ုပ်တို့နှင့်အတူ အနာဂတ်ကို ဖန်တီးကြပါစို့!
          </motion.p>
          <ul
            className={`text-${color}-600 flex xl:gap-8 w-full gap-4 xl:text-base  text-xs items-center  justify-center leading-4 font-semibold`}
          >
            {routerPath.map(({ PageName, PagePath }, index) => {
              return (
                <motion.div key={index}>
                  <motion.li
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={titleVariants}
                    onClick={() => link(PagePath)}
                    className="cursor-pointer"
                  >
                    {PageName}
                  </motion.li>
                </motion.div>
              );
            })}
          </ul>

          <div
            className={`max-w-[144px] text-${color}-600 flex justify-evenly mx-auto my-5`}
          >
            <LuTwitter size={25} />
            <LuFacebook size={25} />
            <LuInstagram size={25} />
          </div>

          <motion.p
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            className="font-roboto leading-4 text-center"
          >
            © 2024 Tinyverse. All Rights Reserved.
          </motion.p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
