import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import HamburgerMenuRoute from "./HamburgerMenuRoute";
import { motion, useInView, useAnimation } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
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
      <div className="flex items-center gap-2">
      <LanguageToggle/>
      <button
        onClick={toggleMenu}
        className="z-50 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      </div>

      {/* Menu Overlay */}
      

      {/* Menu Content */}
      <div
        className={` fixed z-40  w-full md:w-1/3 mt-5  shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "-translate-x-[65%]" : "translate-x-44"
        }`}
      >
        <nav className="p-2     w-full rounded-lg">
          <ul className="flex items-center justify-center">
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
