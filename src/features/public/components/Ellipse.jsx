import React from "react";

import { motion } from "framer-motion";

const Ellipse = ({
  shadow,
  bgColor = "blue",
  borderColor = "blue",
  width = "160px",
  height = "160px",
  children,
}) => {
  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
        border: `3px solid ${borderColor}`,
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={shadow ? "shadow-2xl" : ""}
      animate={{
        borderRadius: [
          "39% 61% 50% 50% / 37% 40% 60% 63%",
          "55% 45% 45% 55% / 60% 63% 37% 40%",
          "25% 75% 65% 35% / 55% 45% 45% 55%",
        ],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Ellipse;
