import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useInView, useAnimation, motion } from "framer-motion";
import { itemVariants, titleVariants } from "../../../utils";
const HamburgerMenuRoute = ({ route, name,toggleMenu }) => {
  const [hoverEff, setHoverEff] = useState(false);
  const handalHoverEnter = () => {
    setHoverEff(true);
  };
  const handalHoverLeave = () => {
    setHoverEff(false);
  };

  const ref = useRef(null)
      const isInView = useInView(ref, { once: true, amount: 0.3 })
      const controls = useAnimation()
    
      if (isInView) {
        controls.start('visible')
      }

  return (
    <motion.li onClick={toggleMenu} initial='hidden' ref={ref} variants={itemVariants} animate={controls} className="z-50"
      onMouseEnter={() => handalHoverEnter()}
      onMouseLeave={() => handalHoverLeave()}
    >
      <NavLink
        to={route}
        className="block py-2 px-4 text-gray-800 font-pacifico rounded transition-all duration-1000 ease-in-out"
      >
        {name}
      </NavLink>
      <div
        className={` ${
          hoverEff ? "w-full" : "w-0"
        } transition-all duration-300  h-1 bg-gradient-to-r from-[#EA580C] via-[#FB923C] to-[#648F1C]  ease-in-out `}
      ></div>
    </motion.li>
  );
};

export default HamburgerMenuRoute;
