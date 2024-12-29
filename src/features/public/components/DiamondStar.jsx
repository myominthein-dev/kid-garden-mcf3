import React from "react";
import { motion } from "framer-motion";

const DiamondStar = ({
  isAnimate = true,
  bgColor = "orange",
  borderColor = "yellow",
  borderWidth = "6px",
  size = "100px",
  shadow = false,
}) => {
  // const animate = isAnimate;
  // ? {
  //     scale: [1, 1.2, 1],
  //     rotate: [0, 0],
  //   }
  // : {};

  const transition = isAnimate
    ? {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }
    : {};

  return (
    <motion.div
      className={`relative flex justify-center items-center ${
        shadow ? "shadow-2xl" : ""
      }`}
      style={{
        width: size,
        height: size,
        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // Diamond shape
        backgroundColor: borderColor, // Outer border color
      }}
      initial={{ scale: 1, rotate: 0 }}
      // animate={animate}
      transition={transition}
    >
      {/* Inner diamond */}
      {/* <div
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // Diamond shape
          backgroundColor: bgColor, // Inner color
          width: `calc(${size} - ${borderWidth} * 2)`,
          height: `calc(${size} - ${borderWidth} * 2)`,
        }}
      /> */}
    </motion.div>
  );
};

export default DiamondStar;
