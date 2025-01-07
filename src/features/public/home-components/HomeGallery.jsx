import React from "react";

import Container from "../components/Container";
import HomeGalleryTitle from "../components/HomeGalleryTitle";
import DetailBtn from "./DetailBtn";

const HomeGallery = () => {
  return (
    <>
      <Container>
        <HomeGalleryTitle />
        <div className=" flex md:hidden   ">
          <DetailBtn content={"View all photos"} />
        </div>
      </Container>
    </>
  );
};

export default HomeGallery;
