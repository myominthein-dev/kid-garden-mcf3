import React from "react";
import Container from "../../components/Container";
import potato from "../../../../assets/coursePage/potato_1.png";
import outerPotato from "../../../../assets/coursePage/outer_potato.png";
import standingKid from "../../../../assets/coursePage/kid_stand_on_knee.png";
import circleWithHands from "../../../../assets/coursePage/making_circle_hands.png";
import groupPlaying from "../../../../assets/coursePage/kids_group_playing.png";
import arrowSvg from "../../../../assets/coursePage/arrow.png";

const SocialDevelopment = () => {
  return (
    <Container className={"my-16 py-5"}>
      <div className="max-w-[1183px]  relative  mx-auto">
        <h1 className="font-poppin w-full md:w-[618px] mx-auto font-semibold leading-10 text-4xl text-center">
          "Fostering Growth Through Social Development"
        </h1>
      </div>
      <div className="md:mt-5 mt-28  ">
        <div className="relative   flex items-center justify-center gap-10 ">
          <div className="relative   flex md:justify-evenly xl:justify-between items-center md:w-full xl:w-4/5 md:h-[600px] xl:h-[900px] mx-auto ">
            <div className="bg-white absolute md:w-[225px] xl:w-[180px] w-[50%] px-7 py-0   shadow-neutral-400 shadow-lg top-[40%] md:top-48 left-5  md:left-0 md:right-0 mx-auto rounded-full xl:px-5 md:px-8 xl:py-2 md:py-1 z-30 ">
              <h3 className="text-[#FF9E0E] text-4xl ">24</h3>
              <p className="leading-9  text-[#333931]">National Students</p>
            </div>
            <div className="absolute  top-20 right-0">
              <img
                className="size-14 top-3  absolute  z-20"
                src={potato}
                alt=""
              />
              <img className="size-16   " src={outerPotato} alt="" />
            </div>
            <img className="absolute top-0 -left-32" src={arrowSvg} alt="" />
            <img
              className="relative md:bottom-28 xl:w-[411px] md:w-[42%] md:h-[250px] z-20 h-full xl:h-[390px] w-full "
              src={circleWithHands}
              alt=""
            />
            <img
              className="xl:absolute absolute md:mt-auto md:relative md:bottom-0 -bottom-10 right-3  xl:left-48 md:right-0 xl:w-[408px] md:w-[43%] w-[55%] z-20 xl:h-[591px] md:h-[450px] h-[300px] "
              src={standingKid}
            />
            <img
              className="xl:block hidden w-[410px] z-20 h-[399px]"
              src={groupPlaying}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SocialDevelopment;
