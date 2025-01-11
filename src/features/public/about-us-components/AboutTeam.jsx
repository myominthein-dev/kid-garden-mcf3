import React from "react";
import Container from "../components/Container";
import AboutTeamGroup from "./AboutTeamGroup";
import StarOrange from "../../../assets/ourCoursesPage/StarOrange.svg";
import greenArrow from "../../../assets/contactUsPage/greenArrow.svg";
import { motion } from "framer-motion";
const AboutTeam = () => {
  return (
    <Container>
      <div className=" flex flex-col py-24 gap-14 md:gap-24 justify-center items-center w-full min-h-screen ">
        <div className="   flex justify-center items-start sm:items-center  gap-4 flex-col w-full">
          <h3 className=" text-orange-500 font-normal text-lg sm:text-xl font-pacifico">
            Who We Are
          </h3>
          <h1 className=" text-2xl sm:text-3xl md:text-4xl font-poppin font-semibold text-neutral-900">
            Our Team Is The Best
          </h1>
        </div>
        <>
          <motion.img
            src={StarOrange}
            alt="starOrange"
            className="absolute top-52 sm:top-44 left-16 h-10"
            initial={{ x: 0, y: -10 }}
            animate={{ x: 0, y: 10 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.img
            src={greenArrow}
            alt="greenArrow"
            className="absolute top-52 right-20 h-20 hidden sm:inline-block"
            initial={{ x: 10, y: -5 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </>
        <div className="w-full">
          <AboutTeamGroup />
        </div>
      </div>
    </Container>
  );
};

export default AboutTeam;
