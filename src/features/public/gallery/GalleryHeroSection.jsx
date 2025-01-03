import React from "react";
import Container from "../components/Container";
import ImageGrid from "./components/ImageGrid";
import ImgGridRow2 from "./components/ImgGridRow2";
import ImgGridRow3 from "./components/ImgGridRow3";
import ImgGridRow1 from "./components/ImgGridRow1";

const GalleryHeroSection = () => {
  return (
    <Container>
      <div>GalleryHeroSection</div>
      <div className=" flex flex-col  gap-8">
        <ImgGridRow1 />
        <ImgGridRow2 />
        <ImgGridRow3 />
      </div>
    </Container>
  );
};

export default GalleryHeroSection;
