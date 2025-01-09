import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "./Container";

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
}) => {
  const navigate = useNavigate();

  return (
    <div className=" w-full flex items-center    justify-between gap-3 mb-5  py-1">
      <nav
        style={{ backgroundImage: `url(${bgImg})` }}
        className={` bg-cover bg-no-repeat bg-top w-full h-[400px] flex items-center   p-10 overflow-hidden `}
        aria-label="Breadcrumb"
      >
        <Container className="flex items-center">
          <img
            src={leftImg}
            className={`w-[${lImgWidth}px]  absolute ${lImgPos}`}
            alt=""
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
            className={`w-[${rImgWidth}px] absolute ${
              rImgPos || "right-0 -top-16"
            } `}
            alt=""
          />
        </Container>
      </nav>
    </div>
  );
};

export default BreadCrumb;
