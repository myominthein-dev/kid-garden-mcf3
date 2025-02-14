import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "./Container";
import breadcrumbFooter from "../../../assets/breadcrumb/breadcrumbFooter.png";
import { motion, useInView, useAnimation } from "framer-motion";
import { imageVariants, titleVariants } from "../../../utils";
const BreadCrumb = ({
  bgImg,
  title,
  rightImg,
  leftImg,
  lImgWidth = 400,
  rImgWidth = 300,
  lImgPos,
  rImgPos,
  currentPageTitle,
  links,
  leftImgShow,
  flexFlow,
}) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [languageSwitch, setLanguageSwitch] = useState(
    localStorage.getItem("lang")
  );
  console.log(languageSwitch);

  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }

  return (
    <div className=" w-full flex items-center    justify-center gap-3 mb-5  py-1">
      <nav
        style={{ backgroundImage: `url(${bgImg})` }}
        className={`relative bg-cover bg-no-repeat bg-top w-full h-[600px] md:h-[400px] flex items-center  p-0  md:p-10 overflow-hidden `}
        aria-label="Breadcrumb"
      >
        <Container
          className={`flex ${flexFlow} h-full md:h-auto  md:flex-row justify-center gap-5 md:gap-0 md:justify-start items-center`}
        >
          <motion.img
            animate={controls}
            initial="hidden"
            ref={ref}
            variants={imageVariants}
            src={leftImg}
            className={`w-[${lImgWidth}px] ${
              leftImgShow ? "block " : "md:block hidden"
            }  md:absolute ${lImgPos}`}
          />
          <ol className="w-full text-center ">
            <div className="mb-4">
              <motion.h1
                animate={controls}
                initial="hidden"
                ref={ref}
                variants={titleVariants}
                className="font-poppin font-semibold text-2xl text-neutral-800"
              >
                {title}
              </motion.h1>
            </div>
            <div className="flex justify-center sm:text-base text-[1rem]   text-nowrap gap-4">
              <li className=" items-center breadCrumbLabel   ">
                <Link to="/" className=" gap-1 items-center   ">
                  <span className="breadCrumbLabel">
                    {languageSwitch === "mm" ? "ပင်မစာမျက်နှာ" : "Home"}
                  </span>
                </Link>
              </li>

              {links &&
                links.map((link, index) => (
                  <motion.li
                    animate={controls}
                    initial="hidden"
                    ref={ref}
                    variants={title}
                    key={index}
                    className="inline-flex  items-center "
                  >
                    <Link
                      to={link.path}
                      className="gap-1 items-center breadCrumbLabel  "
                    >
                      <span className="breadCrumbLabel ">{">"}</span>
                      {link.title}
                    </Link>
                  </motion.li>
                ))}

              <li aria-current="page">
                <div className="flex items-center gap-1">
                  <span className="breadCrumbLabel">{">"}</span>
                  <span className="ms-1  breadCrumbLabel">
                    {currentPageTitle}
                  </span>
                </div>
              </li>
            </div>
          </ol>
          <motion.img
            animate={controls}
            initial="hidden"
            ref={ref}
            variants={imageVariants}
            src={rightImg}
            className={`w-[${rImgWidth}px] md:absolute ${
              leftImgShow ? "hidden md:block" : "block"
            } ${rImgPos || "right-0 -top-16"} `}
          />
        </Container>
        <img
          src={breadcrumbFooter}
          className=" md:hidden block absolute bottom-0 w-full left-0"
        />
      </nav>
    </div>
  );
};

export default BreadCrumb;
