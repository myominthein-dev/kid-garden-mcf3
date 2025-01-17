import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HamburgerMenuRoute = ({ route, name }) => {
  const [hoverEff, setHoverEff] = useState(false);
  const handalHoverEnter = () => {
    setHoverEff(true);
  };
  const handalHoverLeave = () => {
    setHoverEff(false);
  };
  return (
    <li className="z-50"
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
    </li>
  );
};

export default HamburgerMenuRoute;
