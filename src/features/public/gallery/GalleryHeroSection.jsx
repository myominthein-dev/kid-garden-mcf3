import React from "react";
import Container from "../components/Container";

import ImgGridRow2 from "./components/ImgGridRow2";
import ImgGridRow3 from "./components/ImgGridRow3";
import ImgGridRow1 from "./components/ImgGridRow1";
import SeeMoreBtn from "./components/SeeMoreBtn";
import PhotoSection from "./PhotoSection";

const GalleryHeroSection = () => {
  return (
    <Container>
      <div>GalleryHeroSection</div>
      <div className=" flex flex-col  gap-28">
        <PhotoSection />
        <SeeMoreBtn />
      </div>
    </Container>
  );
};

export default GalleryHeroSection;
