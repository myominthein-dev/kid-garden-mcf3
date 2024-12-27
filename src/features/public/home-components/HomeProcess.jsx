import React from "react";
import Container from "../components/Container";
import internetIcon from "../../../assets/homePage/internet.png";
import paperIcon from "../../../assets/homePage/paper.png";
import classIcon from "../../../assets/homePage/class.png";
import schoolIcon from "../../../assets/homePage/school.png";
import arrow from "../../../assets/homePage/arrow.svg";
import vector from "../../../assets/homePage/vector.svg";
import Ellipse from "../components/Ellipse";
import { motion } from "framer-motion";

const HomeProcess = () => {
  const guides = [
    {
      icon: internetIcon,
      title: "Learn Website",
      bgColor: "#FFD4643A",
      borderColor: "#FFD464",
      description:
        "Explore our website to learn more about our programs and offerings.",
    },
    {
      icon: paperIcon,
      title: "Visit Our Courses",
      bgColor: "#A3E6353A",
      borderColor: "#A3E635",
      description:
        "Browse our courses to see how we inspire learning and creativity",
    },
    {
      icon: classIcon,
      title: "Choose Class",
      bgColor: "#F0ABFC3A",
      borderColor: "#F0ABFC",
      description:
        "\"Find the perfect class tailored to your child's needs and interests.",
    },
    {
      icon: schoolIcon,
      title: "Join Our School",
      bgColor: "#F973163A",
      borderColor: "#F97316",
      description:
        "Become part of our vibrant community and start your child's journey with us.",
    },
  ];
  return (
    <Container>
      <div className="relative py-24 flex justify-center flex-col items-center">
        <h1 className="text-xl text-orange-500 font-pacifico mb-4">
          Our Process
        </h1>
        <motion.img
          src={vector}
          className="absolute top-10 left-40"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <h2 className="text-4xl font-poppin font-semibold">
          Guiding Every Step
        </h2>
        <div className="relative mt-8 grid grid-rows-2 grid-cols-8 gap-4">
          {guides.map((guide, index) => (
            <div
              key={index}
              className={`w-[193px] flex flex-col justify-center items-center gap-12 ${
                index === 0
                  ? "row-start-1 col-span-4 col-start-1"
                  : index === 1
                  ? "row-start-2 col-span-4 col-start-3"
                  : index === 2
                  ? "row-start-1 col-span-4 col-start-5"
                  : "row-start-2 col-span-4 col-start-8"
              }`}
            >
              <Ellipse
                initial="50% 50% 50% 50% / 50% 50% 50% 50% "
                isAnimate={false}
                shadow={true}
                width="150px"
                height="150px"
                bgColor={guide.bgColor}
                borderColor={guide.borderColor}
              >
                <img src={guide.icon} className="h-16" alt={guide.title} />
              </Ellipse>
              <div className="text-center flex flex-col gap-3">
                <h1 className="text-xl font-pacifico text-neutral-900">
                  {guide.title}
                </h1>
                <p className="font-roboto text-xs text-neutral-700">
                  {guide.description}
                </p>
              </div>
            </div>
          ))}
          {/* Arrow Image */}
          <img
            src={arrow}
            className="absolute top-[35%] left-[17%]"
            alt="I am Arrow"
          />
          <img
            src={arrow}
            className="absolute top-[40%] right-[20%]"
            alt="I am Arrow"
          />
          <img
            src={arrow}
            className="rotate-[270deg] absolute top-[35%] left-[40%]"
            alt="I am Arrow"
          />
        </div>
        {/* Two absolute ellipses */}
        <div className="absolute bottom-20 left-0">
          <Ellipse
            initial="25% 75% 68% 32% / 78% 30% 70% 22% "
            isAnimate={true}
            shadow={false}
            width="70px"
            height="70px"
            bgColor="#C8EFEA"
            borderColor="#30E1CB"
          />
        </div>
        <div className="absolute top-20 right-20">
          <Ellipse
            initial="65% 35% 37% 63% / 30% 30% 70% 70% "
            isAnimate={true}
            shadow={false}
            width="70px"
            height="70px"
            bgColor="#FEEDDA"
            borderColor="#FAC589"
          />
        </div>
      </div>
    </Container>
  );
};

export default HomeProcess;
