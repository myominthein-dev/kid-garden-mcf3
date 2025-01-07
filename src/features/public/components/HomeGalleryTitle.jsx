import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import DetailBtn from "../home-components/DetailBtn";
const HomeGalleryTitle = () => {
  return (
    <div className=" flex justify-between items-end relative ">
      <div className=" flex flex-col gap-4">
        <h1 className=" font-pacifico text-xl text-orange-500 font-medium leading-9">
          Photo Gallery
        </h1>
        <p className=" font-poppin md:text-4xl text-2xl  leading-[54px] text-neutral-900 font-bold">
          Achieving Excellence Together
        </p>
      </div>
      <div className=" hidden md:flex   ">
        <DetailBtn content={"View all photos"} />
      </div>
    </div>
  );
};

export default HomeGalleryTitle;
