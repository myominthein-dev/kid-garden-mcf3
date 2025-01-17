import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Container from "./Container";
import HamburgerMenu from "./HamburgerMenu";
import telephoneCall from "../../../assets/all/telephone-call.png";
import HamburgerMenuRoute from "./HamburgerMenuRoute";
const Header = () => {
  const nav = useNavigate();

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
  return (
    <header className="">
      <Container>
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-800">
          <div className="flex flex-row  justify-between items-center mx-auto">
            <Link to="/" className="flex items-center">
              <img src={logo} className="mr-3 w-[193px] z-50 h-[110px]" />
            </Link>
            <div className=" gap-3 items-center md:order-2 md:flex hidden   cursor-pointer">
              <img src={telephoneCall} />
              <span className="bg-gradient-to-r from-[#EA580C] via-[#FB923C] to-[#648F1C] bg-clip-text text-transparent">
                +66934526313
              </span>
            </div>
            <div
              className="hidden md:flex justify-center items-center w-full  lg:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex  mt-4 font-medium md:flex-row lg:space-x-8 lg:mt-0">
                {routerPath.map((path, index) => {
                  return (
                    <HamburgerMenuRoute

                      key={index}
                      route={path.PagePath}
                      name={path.PageName}
                    />
                  );
                })}
                {/* <li>
                  <button
                    onClick={() => nav("/")}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => nav("our-courses")}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Our courses
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => nav("gallery")}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => nav("about-us")}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => nav("contact-us")}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact us
                  </button>
                </li> */}
              </ul>
            </div>

            <HamburgerMenu routerPath={routerPath} />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
