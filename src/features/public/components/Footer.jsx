import React, { useEffect, useState } from "react";
import Container from "./Container";
import NewsLetter from "./NewsLetter";
import footerLogo from "../../../assets/homePage/footer_tinyverse.png";
import { useNavigate } from "react-router-dom";

import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";

const Footer = ({ bgImg, color }) => {
  const nav = useNavigate();

  const link = (path) => {
    nav(path);
  };
  return (
    <footer
      style={{ backgroundImage: `url(${bgImg})` }}
      className={` h-[832px] bg-[url()] bg-cover bg-no-repeat  border-gray-200 antialiased dark:bg-gray-800 mt-auto`}
    >
      <Container>
        <NewsLetter color={color} />

        <div className="max-w-[561px] mx-auto relative top-44  h-[316px] ">
          <div className="flex items-center justify-center">
            <img src={footerLogo} alt="" />
          </div>
          <p className="font-roboto text-lg lg:px-20 my-5 text-center text-neutral-700">
            "Find the perfect class tailored to your child's needs and
            interests."
          </p>
          <ul
            className={`text-${color}-600 flex items-center justify-evenly leading-4 font-semibold`}
          >
            <li onClick={() => link("/")} className="cursor-pointer">
              Home
            </li>
            <li onClick={() => link("about-us")} className="cursor-pointer">
              About Us
            </li>
            <li onClick={() => link("our-courses")} className="cursor-pointer">
              Courses
            </li>
            <li onClick={() => link("contact-us")} className="cursor-pointer">
              Contact Us
            </li>
            <li onClick={() => link("upcoming-events")} className="cursor-pointer">
              Events
            </li>
          </ul>

          <div
            className={`max-w-[144px] text-${color}-600 flex justify-evenly mx-auto my-5`}
          >
            <LuTwitter size={25} />
            <LuFacebook size={25} />
            <LuInstagram size={25} />
          </div>

          <p className="font-roboto leading-4 text-center">
            © 2024 Tinyverse. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
