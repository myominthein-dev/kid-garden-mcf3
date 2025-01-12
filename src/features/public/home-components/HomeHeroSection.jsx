import React from "react";
import Container from "../components/Container";
import bgImage from "../../../assets/homePage/homeHeroBg.png";
import cloud from "../../../assets/homePage/cloud2.png";
import twoKid from "../../../assets/homePage/twoKids.png";
import Button from "../components/Button";
import Ellipse from "../components/Ellipse";
import breadCrumb3 from "../../../assets/breadcrumb/breadcrumb-3.png";


const HomeHeroSection = () => {
  const ellipseShapes = [
    {
      bgColor: "#F0ABFC3A",
      borderColor: "#F0ABFC",
      position: { top: "30%", left: "5%" },
    },
    {
      bgColor: "#FDA4AF3A",
      borderColor: "#FDA4AF",
      position: { top: "10%", right: "15%" },
    },

    {
      bgColor: "#A3E6353A",
      borderColor: "#A3E635",
      position: { bottom: "25%", right: "5%" },
    },
  ];
  return (
    <div
      style={{ backgroundImage: `url(${breadCrumb3})` }}
      className="  relative bg-cover h-[1140px] pt-32 bg-no-repeat bg-center "
    >
    <div className="flex flex-col gap-3   items-center justify-center">
     <h1 className="font-pacifico text-lg text-orange-500 mb-4">
        Quality School
      </h1>
      <div className="font-poppin font-semibold text-5xl text-center mb-6">
        <h2 className="text-neutral-700">Welcome to a Place</h2>
        <h2 className="text-neutral-700">
          Where <span className="text-orange-600">Learning is Fun!</span>
        </h2>
      </div>
      <p className="text-neutral-700 font-roboto text-lg w-[400px] text-center mb-7">
        Our nurturing environment inspires children to explore, grow, and shine
        every day!"
      </p>
      <Button className={'bg-orange-500'} label="Learn More" arrowDirection={315} />

     </div>
      <img
        src={twoKid}
        alt="two kids"
        className=" w-full absolute bottom-0 h-[751px] object-contain"
      />
      <img
        src={cloud}
        alt="clouds"
        className="absolute bottom-0 bg-cover w-full"
      />
      {ellipseShapes.map((shape, index) => {
        return (
          <div key={index} className="absolute" style={shape.position}>
            <Ellipse
              initial="39% 61% 50% 50% / 37% 40% 60% 63%"
              width="100px"
              height="100px"
              bgColor={shape.bgColor}
              borderColor={shape.borderColor}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HomeHeroSection;
