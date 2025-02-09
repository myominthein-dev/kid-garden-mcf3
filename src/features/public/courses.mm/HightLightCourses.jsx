import React, { useState, useRef, useEffect } from "react";
import BirdTwo from "../../../assets/ourCoursesPage/BirdTwo.png";
import Sticker from "../../../assets/ourCoursesPage/sticker.png";
import sunImgSticker from "../../../assets/ourCoursesPage/sunImgSticker.png";
import ReactPlayer from "react-player";
import Ellipse from "../components/Ellipse";
import { MdOutlinePlayArrow, MdOutlinePause } from "react-icons/md";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  containerVariants,
  imageVariants,
  itemVariants,
  titleVariants,
} from "../../../utils";
const HightLightCourses = ({ VedioUrl }) => {
  const [playBtnShow, setPlayBtnShow] = useState(true);
  const [pauseBtnShow, setPauseBtnShow] = useState(false);

  const playSoundFun = () => {
    setPlayBtnShow(!playBtnShow);
  };
  const pauseBtnFun = () => {
    setTimeout(() => {
      setPauseBtnShow(!pauseBtnShow);
    }, 500);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className=" flex flex-col  pb-10 gap-10"
    >
      <div className=" flex  justify-end items-center">
        <motion.img variants={imageVariants} src={BirdTwo} alt="" />
      </div>
      <div className=" relative flex justify-center items-center flex-col">
        <div>
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            className=" font-normal text-[20px] leading-[35px] font-pacifico text-orange-500"
          >
            ဗီဒီယိုကြည့်ကြရအောင်
          </motion.h2>
        </div>
        <div className=" relative">
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            className=" text-[36px] leading-[54px]  text-neutral-900 font-poppin font-semibold"
          >
            သင်ကြားမည့် အဓိက အကြောင်းအရာများ
          </motion.h1>
          <motion.img
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className=" absolute top-[-15%] left-[-8%]"
            src={Sticker}
            alt=""
          />
        </div>
        <motion.img
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className=" absolute top-[-35%] left-[10%]"
          src={sunImgSticker}
          alt=""
        />
      </div>
      <div className={`relative `}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          onMouseEnter={() => pauseBtnFun()}
          onMouseLeave={() => pauseBtnFun()}
          className=" absolute z-10 w-full h-full flex justify-center items-center"
        >
          {playBtnShow ? (
            <motion.button
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              className=" cursor-pointer"
              onClick={() => playSoundFun()}
            >
              <Ellipse
                initial="39% 61% 50% 50% / 37% 40% 60% 63%"
                isAnimate={true}
                width="80px"
                height="80px"
                shadow={true}
                bgColor={"#FDA4AF"}
                borderColor={"#FDA4AF"}
              >
                <MdOutlinePlayArrow className=" text-white w-8 h-8" />
              </Ellipse>
            </motion.button>
          ) : (
            pauseBtnShow && (
              <motion.button
                ref={ref}
                // initial="hidden"
                animate={controls}
                variants={itemVariants}
                className={`cursor-pointer ${
                  pauseBtnShow ? " opacity-100" : "opacity-0"
                } transition-all duration-1000`}
                onClick={() => playSoundFun()}
              >
                <Ellipse
                  initial="39% 61% 50% 50% / 37% 40% 60% 63%"
                  isAnimate={true}
                  width="80px"
                  height="80px"
                  shadow={true}
                  bgColor={"#FDA4AF"}
                  borderColor={"#FDA4AF"}
                >
                  <MdOutlinePause className=" text-white w-8 h-8" />
                </Ellipse>
              </motion.button>
            )
          )}
        </motion.div>
        <ReactPlayer
          url={VedioUrl}
          playing={!playBtnShow} // Autoplay enabled
          loop
          muted
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </motion.div>
  );
};

export default HightLightCourses;
