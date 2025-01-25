import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import HamburgerMenuRoute from "./HamburgerMenuRoute";
import { motion, useInView, useAnimation } from "framer-motion";
const HamburgerMenu = ({ routerPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  const logoVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      variants={logoVariants}
      initial="initial"
      animate="animate"
      className="relative md:hidden block"
    >
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="z-50 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Menu Content */}
      <div
        className={`fixed  top-0 left-0 z-40 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4 w-3/4  absolute top-[5%] left-[5%]  ">
          <ul className="space-y-2">
            {routerPath.map((path, index) => {
              return (
                <HamburgerMenuRoute
                  toggleMenu={toggleMenu}
                  key={index}
                  route={path.PagePath}
                  name={path.PageName}
                />
              );
            })}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default HamburgerMenu;
