import React from "react";
import Container from "../components/Container";
import ContactFaqGroup from "./ContactFaqGroup";
import earth from "../../../assets/contact/earth.svg";
import { motion } from "framer-motion";
const ContactUsFaqSection = () => {
  return (
    <Container>
      <div className=" flex flex-col pt-12 pb-24 gap-20  items-center w-full h-full relative min-h-screen">
        <>
          <motion.img
            src={earth}
            alt="earth"
            className="absolute top-20 left-16"
            initial={{ x: -15, y: -10 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </>
        <div className="  flex justify-center items-center  gap-4 flex-col w-[618px]">
          <h3 className=" text-orange-500 font-normal text-xl font-pacifico">
            Contact Form
          </h3>
          <h1 className=" text-center text-4xl font-poppin font-semibold text-neutral-900">
            Frequently Asked Questions
          </h1>
        </div>
        <div className=" w-[618px] flex justify-center items-center h-full">
          <ContactFaqGroup />
        </div>
      </div>
    </Container>
  );
};

export default ContactUsFaqSection;
