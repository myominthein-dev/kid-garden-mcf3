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
        <h1 className="sub-heading">Our Process</h1>
        <motion.img
          src={vector}
          className=" absolute top-3 left-1 lg:top-10 lg:left-40"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <h2 className="heading">Guiding Every Step</h2>
        <div className="relative mt-8 grid grid-cols-2 md:grid-rows-2 md:grid-cols-8 gap-x-4 gap-x-16 gap-y-16 md:gap-4">
          {guides.map((guide, index) => (
            <div
              key={index}
              className={`w-[193px] flex flex-col justify-center items-center gap-7 lg:gap-12 ${
                index === 0
                  ? "md:row-start-1 md:col-span-4 md:col-start-1"
                  : index === 1
                  ? "md:row-start-2 md:col-span-4 md:col-start-3"
                  : index === 2
                  ? "md:row-start-1 md:col-span-4 md:col-start-5"
                  : "md:row-start-2 md:col-span-4 md:col-start-8"
              }`}
            >
              <Ellipse
                initial="50% 50% 50% 50% / 50% 50% 50% 50% "
                isAnimate={false}
                shadow={true}
                width={window.innerWidth < 763 ? "100px" : "150px"}
                height={window.innerWidth < 763 ? "100px" : "150px"}
                bgColor={guide.bgColor}
                borderColor={guide.borderColor}
              >
                <img
                  src={guide.icon}
                  className="h-12 lg:h-16"
                  alt={guide.title}
                />
              </Ellipse>
              <div className="text-center flex flex-col gap-3">
                <h1 className="text-md md:text-xl font-pacifico text-neutral-900">
                  {guide.title}
                </h1>
                <p className="w-[150px] text-center font-roboto text-xs text-neutral-700">
                  {guide.description}
                </p>
              </div>
            </div>
          ))}
          {/* Arrow Image */}
          <img
            src={arrow}
            className="size-14 md:size-20 absolute rotate-[320deg] md:rotate-0 top-[5%] left-[45%] md:top-[35%] md:left-[17%]"
            alt="I am Arrow"
          />
          <img
            src={arrow}
            className="size-14 md:size-20 rotate-[320deg] md:rotate-0 absolute top-[60%] left-[45%] md:top-[40%] md:right-[20%] md:left-auto"
            alt="I am Arrow"
          />
          <img
            src={arrow}
            className="size-14 md:size-20 rotate-90 md:rotate-[270deg] absolute  top-[45%] left-[45%] md:top-[35%] md:left-[40%]"
            alt="I am Arrow"
          />
        </div>
        {/* Two absolute ellipses */}
        <div className="hidden lg:block absolute bottom-20 left-0">
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
        <div className="hidden lg:block absolute top-20 right-20">
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
