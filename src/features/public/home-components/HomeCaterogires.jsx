import React from "react";
import Container from "../components/Container";
import { LuBrainCircuit, LuCodepen, LuPuzzle, LuSlack } from "react-icons/lu";
import Ellipse from "../components/Ellipse";
import starOrange from "../../../assets/homePage/star-orange.svg";
import starPurple from "../../../assets/homePage/star-purple.svg";
import { motion } from "framer-motion";

const HomeCategories = () => {
  const categories = [
    {
      icon: (
        <LuBrainCircuit className="text-white w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] border-none" />
      ),
      title: "Language and Literacy",
      bgColor: "#FDA4AF",
      borderColor: "#FDA4AF",
    },
    {
      icon: (
        <LuCodepen className="text-white w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] border-none" />
      ),
      title: "Arts and Creativity",
      bgColor: "#FB923C",
      borderColor: "#FB923C",
    },
    {
      icon: (
        <LuPuzzle className="text-white w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] border-none" />
      ),
      title: "Math and Problem-Solving",
      bgColor: "#F0ABFC",
      borderColor: "#F0ABFC",
    },
    {
      icon: (
        <LuSlack className="text-white w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] border-none" />
      ),
      title: "Social Development",
      bgColor: "#A3E635",
      borderColor: "#A3E635",
    },
  ];

  return (
    <Container>
      <div className="relative flex justify-center flex-col items-center py-24">
        <h1 className="sub-heading">Course Categories</h1>
        <motion.img
          src={starOrange}
          alt="Orange Star"
          className="absolute -top-4 left-8 lg:top-20 lg:left-10"
          initial={{ x: -10, y: 0 }}
          animate={{ x: 10, y: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.img
          src={starPurple}
          alt="Purple Star"
          className="absolute top-8 right-10 lg:top-36 lg:right-20"
          initial={{ x: 10, y: 0 }}
          animate={{ x: -10, y: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <h2 className="heading">Building Foundations for Lifelong Learning</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-7 p-3 md:p-7 border border-neutral-700 border-dashed rounded-xl"
            >
              <Ellipse
                initial="39% 61% 50% 50% / 37% 40% 60% 63%"
                isAnimate={true}
                width={window.innerWidth < 768 ? "100px" : "194px"}
                height={window.innerWidth < 768 ? "80px" : "174px"}
                shadow={true}
                bgColor={category.bgColor}
                borderColor={category.borderColor}
              >
                {category.icon}
              </Ellipse>
              <p className="text-lg md:text-xl font-pacifico text-neutral-900 text-center">
                <span className="drop-shadow-lg">{category.title}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomeCategories;
