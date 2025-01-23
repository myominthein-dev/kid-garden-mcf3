import React from "react";
import Container from "../components/Container";
import leftBumpPink from "../../../assets/contact/leftBumpPink.png";
import leftBumpOrange from "../../../assets/contact/leftBumpOrange.png";
import happyGirl from "../../../assets/contact/happyGirl.png";
import Butterfly from "../../../assets/contact/Butterfly.svg";
import bean from "../../../assets/contact/bean.png";
import paperAeroPlane from "../../../assets/contact/paperAeroPlane.svg";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const ContactUsHeroSection = () => {
  return (
    <section className=" relative">
      <>
        <img
          src={leftBumpOrange}
          alt="leftBumpOrange"
          className="absolute md:h-[640px]  h-[540px] md:-left-16 -left-12 top-8 md:top-10 -z-10"
        />
        <img
          src={leftBumpPink}
          alt="leftBumpPink"
          className="absolute md:h-[600px]  h-[500px] md:-left-16 -left-12 origin-top-left rotate-3 -z-10"
        />
        <img
          src={Butterfly}
          alt="butterFly"
          className=" absolute md:top-[50%] lg:top-20  md:left-[85%] lg:left-28 z-20 w-20 h-20 hidden md:inline-block"
        />
        <img
          src={happyGirl}
          alt="happyGirl"
          className=" left-2 bottom-12 absolute z-20 w-80 h-80 hidden lg:inline-block"
        />
        <img
          src={bean}
          alt="bean"
          className="absolute top-32 right-24 h-20 w-20 hidden lg:inline-block"
        />
        <motion.img
          src={paperAeroPlane}
          alt="paperAeroPlane"
          className="absolute bottom-2 right-52 md:right-72 xl:right-96 h-28 w-28 hidden lg:inline-block"
          initial={{ x: -15, y: -10 }}
          animate={{ x: 0, y: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </>
      <Container>
        <div className=" flex flex-col py-24 gap-14 md:gap-20 justify-center items-center w-full h-full relative min-h-screen">
          <div className="  flex justify-center items-start sm:items-center  gap-4 flex-col w-full">
            <h3 className=" text-orange-500 font-normal text-xl font-pacifico">
              Contact Form
            </h3>
            <h1 className=" text-2xl sm:text-3xl md:text-4xl font-poppin font-semibold text-neutral-900">
              Get In Touch with Us!
            </h1>
          </div>
          <div className=" w-full sm:w-2/3 lg:w-1/3  flex justify-center items-center">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default ContactUsHeroSection;
