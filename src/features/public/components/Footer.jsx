import React from "react";
import Container from "./Container";
import NewsLetter from "./NewsLetter";
import footerLogo from "../../../assets/homePage/footer_tinyverse.png"
import { useNavigate } from "react-router-dom";
import facebook from "../../../assets/homePage/facebook_vec.png"
import twitter from "../../../assets/homePage/twitter_vec.png"
import instagram from "../../../assets/homePage/ig_vec.png"


const Footer = ({bgImg,newsLetterBgColor}) => {
  const nav = useNavigate();

  const link = (path) => {
    nav(path);
  }
  return (
    <footer style={{backgroundImage : `url(${bgImg})`}}  className={`border-t-2 h-[832px] bg-[url()] bg-cover bg-no-repeat  border-gray-200 antialiased dark:bg-gray-800 mt-auto`}>
      <Container>
        <NewsLetter color={newsLetterBgColor} />
        
        <div className="max-w-[561px] mx-auto relative top-44  h-[316px] ">
              <div className="flex items-center justify-center">
                <img  src={footerLogo} alt="" />
              </div>
              <p className="font-roboto text-lg lg:px-20 my-5 text-center text-neutral-700">"Find the perfect class tailored to your child's needs and interests."</p>
              <ul className="text-orange-600 flex items-center justify-evenly leading-4 font-semibold">
                <li onClick={()=>link('/')} className="cursor-pointer">Home</li>
                <li onClick={()=>link('about-us')} className="cursor-pointer">About Us</li>
                <li onClick={()=>link('our-courses')} className="cursor-pointer">Courses</li>
                <li onClick={()=>link('contact-us')} className="cursor-pointer">Contact Us</li>
                <li onClick={()=>link('events')} className="cursor-pointer">Events</li>
              </ul>

              <div className="max-w-[144px] flex justify-evenly mx-auto my-5">
                <img src={twitter} alt="" /><img src={facebook} alt="" /><img src={instagram} alt="" />
              </div>

              <p className="font-roboto leading-4 text-center">© 2024 Tinyverse. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
