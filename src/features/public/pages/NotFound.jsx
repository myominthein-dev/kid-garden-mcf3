import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Footer from "../components/Footer";
import breadCrumb3 from "../../../assets/breadcrumb/breadcrumb-3.png";
import NotFoundBCImg from "../../../assets/NotFoundBCImg.png";
import footerBg from "../../../assets/all/BG hero-sec.jpg";
import Header from "../components/Header";
import NotFoundImg from "../../../assets/404 Error with a cute animal-pana 1.png";
import NotFoundSticker from "../../../assets/breadcrumb/ellipse.png";
const NotFound = () => {
  return (
    <main>
      <Header />
      {/* <Suspense fallback={<PageLoading />}></Suspense> */}
      <BreadCrumb
        bgImg={breadCrumb3}
        leftImg={NotFoundBCImg}
        rightImg={""}
        title={"404"}
        currentPageTitle={"404"}
        lImgWidth={600}
        lImgPos={"-top-0 -left-44"}
      />
      <Container>
        <div className=" relative flex justify-center items-center gap-3 py-12 px-[10px]">
          <img className=" absolute top-[20%] left-0" src={NotFoundSticker} />
          <img src={NotFoundImg} />
        </div>
      </Container>
      <Footer bgImg={footerBg} color={"orange"} />
    </main>
  );
};

export default NotFound;
