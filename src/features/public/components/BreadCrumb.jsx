import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "./Container";
import breadcrumbFooter from "../../../assets/breadcrumb/breadcrumbFooter.png";

const BreadCrumb = ({
  bgImg,
  title,
  rightImg,
  leftImg,
  lImgWidth = 400,
  rImgWidth = 300,
  lImgPos,
  rImgPos,
  currentPageTitle,
  links,
  leftImgShow,
  flexFlow,
}) => {
  const navigate = useNavigate();

  return (
    <div className=" w-full flex items-center    justify-center gap-3 mb-5  py-1">
      <nav
        style={{ backgroundImage: `url(${bgImg})` }}
        className={`relative bg-cover bg-no-repeat bg-top w-full h-[600px] md:h-[400px] flex items-center  p-0  md:p-10 overflow-hidden `}
        aria-label="Breadcrumb"
      >
        <Container
          className={`flex ${flexFlow} h-full md:h-auto  md:flex-row justify-center gap-5 md:gap-0 md:justify-start items-center`}
        >
          <img
            src={leftImg}
            className={`w-[${lImgWidth}px] ${
              leftImgShow ? "block " : "md:block hidden"
            }  md:absolute ${lImgPos}`}
          />
          <ol className="w-full text-center">
            <div className="mb-4">
              <h1 className="font-poppin font-semibold text-2xl text-neutral-800">
                {title}
              </h1>
            </div>
            <div className="flex justify-center gap-4">
              <li className=" items-center breadCrumbLabel">
                <Link to="/" className=" gap-1 items-center ">
                  <span className="breadCrumbLabel">Home</span>
                </Link>
              </li>

              {links &&
                links.map((link, index) => (
                  <li key={index} className="inline-flex  items-center">
                    <Link
                      to={link.path}
                      className="gap-1 items-center breadCrumbLabel "
                    >
                      <span className="breadCrumbLabel">{">"}</span>
                      {link.title}
                    </Link>
                  </li>
                ))}

              <li aria-current="page">
                <div className="flex items-center gap-1">
                  <span className="breadCrumbLabel">{">"}</span>
                  <span className="ms-1  breadCrumbLabel">
                    {currentPageTitle}
                  </span>
                </div>
              </li>
            </div>
          </ol>
          <img
            src={rightImg}
            className={`w-[${rImgWidth}px] md:absolute ${
              leftImgShow ? "hidden md:block" : "block"
            } ${rImgPos || "right-0 -top-16"} `}
          />
        </Container>
        <img
          src={breadcrumbFooter}
          className=" md:hidden block absolute bottom-0 w-full left-0"
        />
      </nav>
    </div>
  );
};

export default BreadCrumb;
