import React from "react";
import pexels1 from "../../../assets/gallery/pexels1.png";
import pexels2 from "../../../assets/gallery/pexels2.png";
import pexels3 from "../../../assets/gallery/pexels3.png";
import pexels4 from "../../../assets/gallery/pexels4.png";
import pexels5 from "../../../assets/gallery/pexels5.png";
import pexels6 from "../../../assets/gallery/pexels6.png";
import LongCol from "./LongCol";
import ShortCol from "./ShortCol";

const HomeGalleryalbum = () => {
  return (
    // <div className=" grid grid-cols-3  gap-8">
    //   <div className=" flex flex-col gap-4    ">
    //     <div className="  ">
    //       <img src={pexels1} alt="" />
    //     </div>
    //     <div className=" ">
    //       <img src={pexels2} alt="" />
    //     </div>
    //   </div>
    //   <div className=" flex flex-col gap-4  ">
    //     <div className="  ">
    //       <img src={pexels1} alt="" />
    //     </div>
    //     <div className=" ">
    //       <img src={pexels2} alt="" />
    //     </div>
    //   </div>
    //   <div className=" flex flex-col gap-4    ">
    //     <div className="  ">
    //       <img src={pexels1} alt="" />
    //     </div>
    //     <div className=" ">
    //       <img src={pexels2} alt="" />
    //     </div>
    //   </div>
    // </div>
    <div className="grid grid-rows-3 grid-flow-col gap-4  ">
      <LongCol src={pexels2} />
      <ShortCol src={pexels6} className={"self-end"} />
      <ShortCol src={pexels1} />
      <LongCol src={pexels5} />
      <LongCol src={pexels3} />
      <ShortCol src={pexels4} className={"self-end"} />
    </div>
  );
};

export default HomeGalleryalbum;
