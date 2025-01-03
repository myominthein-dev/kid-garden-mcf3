import React from "react";
import Container from "../components/Container";
import ContactTeamGroup from "./ContactTeamGroup";
import StarOrange from "../../../assets/ourCoursesPage/StarOrange.svg";
import greenArrow from "../../../assets/contactUsPage/greenArrow.svg";
import { motion } from "framer-motion";
const ContactTeam = () => {
  return (
    <Container>
      <div className=" relative flex flex-col py-24 gap-24 justify-center items-center w-full min-h-screen ">
        <div className="  flex justify-center items-center  gap-4 flex-col w-[618px]">
          <h3 className=" text-orange-500 font-normal text-xl font-pacifico">
            Who We Are
          </h3>
          <h1 className=" text-center text-4xl font-poppin font-semibold text-gray-900">
            Our Team Is The Best
          </h1>
        </div>
        <>
          <motion.img
            src={StarOrange}
            alt="starOrange"
            className="absolute top-44 left-16 h-10"
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
            className="absolute top-52 right-20 h-20"
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
          <ContactTeamGroup />
        </div>
      </div>
    </Container>
  );
};

export default ContactTeam;
