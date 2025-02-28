import {React, useRef} from "react";

import Container from "../components/Container";
import HomeGalleryTitle from "../components/HomeGalleryTitle.mm";
import DetailBtn from "./DetailBtn";
import HomeGalleryalbum from "./HomeGalleryalbum";
const HomeGallery = () => {
  
  return (
    <>
      <Container className={" flex flex-col gap-8"}>
        <HomeGalleryTitle />
        <HomeGalleryalbum />
        <div className=" flex md:hidden   ">
          <DetailBtn content={"View all photos"} />
        </div>
      </Container>
    </>
  );
};

export default HomeGallery;
