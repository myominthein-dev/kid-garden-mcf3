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
        <LuBrainCircuit className="text-white w-[80px] h-[80px] border-none" />
      ),
      title: "Language and Literacy",
      bgColor: "#FDA4AF",
      borderColor: "#FDA4AF",
    },
    {
      icon: <LuCodepen className="text-white w-[80px] h-[80px] border-none" />,
      title: "Arts and Creativity",
      bgColor: "#FB923C",
      borderColor: "#FB923C",
    },
    {
      icon: <LuPuzzle className="text-white w-[80px] h-[80px] border-none" />,
      title: "Math and Problem-Solving",
      bgColor: "#F0ABFC",
      borderColor: "#F0ABFC",
    },
    {
      icon: <LuSlack className="text-white w-[80px] h-[80px] border-none" />,
      title: "Social Development",
      bgColor: "#A3E635",
      borderColor: "#A3E635",
    },
  ];

  return (
    <Container>
      <div className="relative flex justify-center flex-col items-center py-24">
        <h1 className="font-pacifico text-xl text-orange-500 mb-4">
          Course Categories
        </h1>
        <motion.img
          src={starOrange}
          alt="Orange Star"
          className="absolute top-20 left-10"
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
          className="absolute top-36 right-20"
          initial={{ x: 10, y: 0 }}
          animate={{ x: -10, y: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <h2 className="text-4xl text-neutral-900 font-semibold font-poppin w-[600px] text-center">
          Building Foundations for Lifelong Learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 px-7 py-7 border border-neutral-700 border-dashed rounded-xl"
            >
              <Ellipse
                initial="39% 61% 50% 50% / 37% 40% 60% 63%"
                isAnimate={true}
                width="194px"
                height="174px"
                shadow={true}
                bgColor={category.bgColor}
                borderColor={category.borderColor}
              >
                {category.icon}
              </Ellipse>
              <p className="text-xl font-pacifico text-neutral-900">
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
