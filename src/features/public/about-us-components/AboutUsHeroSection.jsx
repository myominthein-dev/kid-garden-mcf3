import React from "react";
import Container from "../components/Container";
import StarOrange from "../../../assets/ourCoursesPage/StarOrange.svg";
import StarPink from "../../../assets/ourCoursesPage/StarPink.svg";
import ourClass from "../../../assets/contactUsPage/ourClass.png";
import plane from "../../../assets/contactUsPage/plane.svg";
import AboutHeroListGroup from "./AboutHeroListGroup";
import { motion } from "framer-motion";
const AboutUsHeroSection = () => {
  return (
    <Container>
      <div className=" flex flex-col pt-24 gap-24 justify-center items-center w-full min-h-screen ">
        {" "}
        <div className="  flex justify-center items-center  gap-4 flex-col w-[618px]">
          <h3 className=" text-orange-500 font-normal text-xl font-pacifico">
            How We Work
          </h3>
          <h1 className=" text-center text-4xl font-poppin font-semibold text-neutral-900">
            We Are Best In Education
          </h1>
        </div>
        <div className="relative flex justify-between h-full  w-full pt-20 gap-5">
          <>
            <motion.img
              src={plane}
              alt="plane"
              className="absolute top-10 left-0  h-24"
              initial={{ x: 10, y: -5 }}
              animate={{ x: 0, y: 0 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <motion.img
              src={StarOrange}
              alt="starOrange"
              className="absolute top-0 left-28 h-10"
              initial={{ x: 0, y: -10 }}
              animate={{ x: 0, y: 10 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </>
          <div className="flex-1 relative">
            <motion.img
              src={StarPink}
              alt="starPink"
              className="absolute top-2 right-24 h-10"
              initial={{ x: 0, y: -10 }}
              animate={{ x: 0, y: 10 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <img src={ourClass} alt="ourClass" />
          </div>
          <div className="flex-1">
            <AboutHeroListGroup />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUsHeroSection;
