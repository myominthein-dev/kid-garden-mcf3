import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Container from "./Container";

const Header = () => {
  return (
    <header className="">
      <Container>
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="mr-3 w-[193px] h-[110px]"
                alt="Flowbite Logo"
              />
            </Link>
            <div className="flex gap-3 items-center lg:order-2 cursor-pointer">
              <MdOutlinePhoneInTalk className="size-5" />
              <span>+66934526313</span>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="our-courses"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Our courses
                  </Link>
                </li>

                <li>
                  <Link
                    to="gallery"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="about-us"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact-us"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
