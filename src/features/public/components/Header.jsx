import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Container from "./Container";
import HamburgerMenu from "./HamburgerMenu";
import telephoneCall from "../../../assets/all/telephone-call.png";
import HamburgerMenuRoute from "./HamburgerMenuRoute";
import { motion, useInView, useAnimation } from "framer-motion";
import { containerVariants, itemVariants, titleVariants } from "../../../utils";
import { LanguageToggle } from "./LanguageToggle";
const Header = () => {
  const nav = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const link = (path) => {
    nav(path);
  };
  const routerPath = [
    { PageName: "Home", PagePath: "/" },
    { PageName: "Courses", PagePath: "/our-courses" },
    { PageName: "Gallery", PagePath: "/gallery" },
    { PageName: " About us", PagePath: "/about-us" },
    { PageName: " Contact us", PagePath: "/contact-us" },
  ];
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
    <header className={`lg:sticky top-0 z-50 transition-all duration-300 bg-white ${
        isVisible ? "lg:translate-y-0" : "lg:-translate-y-full"
      }`}>
      <Container>
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-800">
          <motion.div
            variants={containerVariants}
            className="flex flex-row  justify-between items-center mx-auto"
          >
            <Link to="/" className="flex items-center">
              <motion.img
                src={logo}
                alt="Company Logo"
                className="mr-3 w-[193px] z-10 h-[110px]"
                variants={logoVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              />
            </Link>
            <div className=" gap-3 items-center md:order-2 md:flex hidden   cursor-pointer">
              
              <motion.img
                initial="hidden"
                className="hidden xl:block"
                ref={ref}
                animate={controls}
                variants={titleVariants}
                src={telephoneCall}
              />
             
              <motion.span
                initial="hidden"
                ref={ref}
                animate={controls}
                variants={titleVariants}
                className="bg-gradient-to-r hidden xl:block from-[#EA580C] via-[#FB923C] to-[#648F1C] bg-clip-text text-transparent"
              >
                +66934526313
              </motion.span>
            <LanguageToggle />

            </div>
            <div
              className="hidden md:flex justify-center items-center w-full  lg:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex  mt-4 font-medium md:flex-row lg:space-x-8 md:mt-0">
                {routerPath.map((path, index) => {
                  return (
                    <HamburgerMenuRoute
                      key={index}
                      route={path.PagePath}
                      name={path.PageName}
                    />
                  );
                })}
              </ul>
            </div>

            <HamburgerMenu routerPath={routerPath} />
          </motion.div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
