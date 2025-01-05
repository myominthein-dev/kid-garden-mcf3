import React from "react";
import Ellipse from "../components/Ellipse";
import StarPink from "../../../assets/ourCoursesPage/StarPink.svg";
import { motion } from "framer-motion";

const ContactTeamCard = ({
  teacher: { id, name, position, image, bgColor, borderColor },
}) => {
  return (
    <div className="relative  col-span-1 flex flex-col items-center gap-8">
      <>
        <motion.img
          src={StarPink}
          alt="starPink"
          className={`  ${
            id === 2 ? "z-10 block  absolute top-0 right-10  h-10" : "hidden"
          }`}
          initial={{ x: 0, y: -10 }}
          animate={{ x: 0, y: 10 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </>
      <Ellipse
        initial=" 39% 61% 50% 50% / 37% 40% 60% 63%"
        isAnimate={true}
        shadow={true}
        width="65%"
        height="100%"
        bgColor={bgColor}
        borderColor={borderColor}
        border={true}
      >
        <img src={image} alt={name} className=" rounded-lg h-auto" />
      </Ellipse>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-xl font-poppin font-semibold text-gray-900">
          {name}
        </h3>
        <p
          className={`text-base  font-pacifico ${
            id === 1
              ? " text-amber-500"
              : id === 2
              ? "text-purple-500"
              : id === 3
              ? " text-orange-500"
              : id === 4
              ? " text-pink-500"
              : ""
          }`}
        >
          {position}
        </p>
      </div>
    </div>
  );
};

export default ContactTeamCard;
