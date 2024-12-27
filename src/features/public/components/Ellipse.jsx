import React from "react";

import { motion } from "framer-motion";

const Ellipse = ({
  initial,
  isAnimate = true,
  shadow,
  bgColor = "blue",
  borderColor = "blue",
  width = "160px",
  height = "160px",
  children,
}) => {
  const animate = isAnimate
    ? {
        borderRadius: [
          initial,
          "55% 45% 45% 55% / 60% 63% 37% 40%",
          "25% 75% 65% 35% / 55% 45% 45% 55%",
        ],
      }
    : {};

  const transition = isAnimate
    ? {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }
    : {};

  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
        border: `3px solid ${borderColor}`,
        borderRadius: initial,
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={shadow ? "shadow-2xl" : ""}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Ellipse;
