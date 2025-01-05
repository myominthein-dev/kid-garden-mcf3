import React from "react";
import Container from "../components/Container";
import ContactMarketingGroup from "./ContactMarketingGroup";
import StarOrange from "../../../assets/ourCoursesPage/StarOrange.svg";
import StarPink from "../../../assets/ourCoursesPage/StarPink.svg";
import abc from "../../../assets/contactUsPage/abc.svg";
import arrow from "../../../assets/contactUsPage/arrow.svg";
import notation from "../../../assets/contactUsPage/notation.png";
const ContactMarketing = () => {
  return (
    <section className="bg-[#FEF5DB]">
      <Container>
        <div className="relative flex flex-col py-32 gap-24 justify-center items-center w-full min-h-screen ">
          <>
            <img
              className=" absolute top-8 left-16 h-10"
              src={StarOrange}
              alt="starOrange"
            />
            <img
              className=" absolute bottom-24 left-48 h-10"
              src={StarPink}
              alt="starPink"
            />
            <img
              src={notation}
              alt="notation"
              className=" absolute top-24 right-0 left-0 mx-auto h-20"
            />
          </>
          <div className="flex justify-between items-center gap-5 w-full">
            <div className="w-full">
              <ContactMarketingGroup />
            </div>
            <div className="w-full px-20 ">
              <img
                src={abc}
                alt="abc"
                className=" absolute top-4 right-10 h-28"
              />
              <div className="flex flex-col gap-7 items-start justify-center">
                <h1 className="font-poppin font-semibold text-4xl">
                  What We Believe in Tinyverse
                </h1>
                <p className="font-roboto text-[20px] leading-[30px] text-gray-700">
                  We are a passionate team of early childhood educators who
                  believe every child is unique, capable, and full of potential.
                </p>
                <button className="bg-orange-500 px-6 py-3 rounded-full text-white">
                  Contact Us
                </button>
              </div>
              <img
                src={arrow}
                alt="arrow"
                className=" absolute bottom-56 right-96 h-24"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactMarketing;
