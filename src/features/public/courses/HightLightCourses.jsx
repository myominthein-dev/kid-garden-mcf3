import React, { useState } from "react";
import BirdTwo from "../../../assets/ourCoursesPage/BirdTwo.png";
import Sticker from "../../../assets/ourCoursesPage/sticker.png";
import sunImgSticker from "../../../assets/ourCoursesPage/sunImgSticker.png";
import ReactPlayer from "react-player";
import Ellipse from "../components/Ellipse";
import { MdOutlinePlayArrow, MdOutlinePause } from "react-icons/md";

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
  return (
    <div className=" flex flex-col  pb-10 gap-10">
      <div className=" flex  justify-end items-center">
        <img src={BirdTwo} alt="" />
      </div>
      <div className=" relative flex justify-center items-center flex-col">
        <div>
          <h2 className=" font-normal text-[20px] leading-[35px] font-pacifico text-orange-500">
            Play Video
          </h2>
        </div>
        <div className=" relative">
          <h1 className=" text-[36px] leading-[54px]  text-neutral-900 font-poppin font-semibold">
            Highlight of A Course
          </h1>
          <img
            className=" absolute top-[-15%] left-[-8%]"
            src={Sticker}
            alt=""
          />
        </div>
        <img
          className=" absolute top-[-35%] left-[10%]"
          src={sunImgSticker}
          alt=""
        />
      </div>
      <div className={`relative `}>
        <div
          onMouseEnter={() => pauseBtnFun()}
          onMouseLeave={() => pauseBtnFun()}
          className=" absolute z-10 w-full h-full flex justify-center items-center"
        >
          {playBtnShow ? (
            <button className=" cursor-pointer" onClick={() => playSoundFun()}>
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
            </button>
          ) : (
            pauseBtnShow && (
              <button
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
              </button>
            )
          )}
        </div>
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
    </div>
  );
};

export default HightLightCourses;
