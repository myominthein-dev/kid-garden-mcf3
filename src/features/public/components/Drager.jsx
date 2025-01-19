import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsFillBackpack3Fill } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";

const Drager = () => {
  const [mousePosition, seMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMOveFun = (e) => {
      // console.log(e);

      seMousePosition({
        x: e.clientX,
        y: e.pageY,
      });
    };
    window.addEventListener("mousemove", mouseMOveFun);
    return () => {
      window.removeEventListener("mousemove", mouseMOveFun);
    };
  });
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: "tween", // Using tween for smooth transitions
        duration: 0.5, // Duration of the transition
        ease: "easeOut", // Ease function (can also be 'easeIn', 'easeInOut', etc.)
      },
    },
  };

  return (
    <motion.div
      className=" absolute md:block hidden"
      variants={variants}
      animate="default"
    >
      <HiOutlineBookOpen size={"50"} color="#6BCE95" />
    </motion.div>
  );
};

export default Drager;
