import React from "react";
import img1 from "../../../../assets/gallery/grid2_1.png";
import img2 from "../../../../assets/gallery/grid2_2.png";
import img3 from "../../../../assets/gallery/grid2_3.png";
import img4 from "../../../../assets/gallery/grid2_4.png";
import img5 from "../../../../assets/gallery/grid2_5.png";
import img6 from "../../../../assets/gallery/grid2_6.png";
import svg3 from "../../../../assets/gallery/3.svg";
import ImageDiv from "./ImageDiv";
const ImgGridRow2 = () => {
  return (
    <div className={" relative"}>
      <img
        className=" hidden xl:inline-block  rotate-12 absolute -top-20 right-1/3 translate-x-10"
        src={svg3}
        alt=""
      />
      <div className=" w-full xl:h-[640px] grid md:grid-cols-9  gap-6">
        {/* left  */}
        <div className=" md:col-start-1 md:col-end-4 md:grid hidden xl:col-start-1 xl:col-end-3 col-span-2 h-full     ">
          <ImageDiv className={"border-orange-400 "} src={img1} />
        </div>

        {/* middle  */}
        <div className="  xl:col-start-3 xl:col-end-7  hidden xl:grid justify-between  gap-6  ">
          <ImageDiv className={"border-green-300 "} src={img2} />
          <div className="  grid grid-cols-2  gap-6 ">
            <ImageDiv className={"border-red-400 "} src={img3} />
            <ImageDiv className={"border-fuchsia-400 "} src={img4} />
          </div>
        </div>
        {/* right*/}
        <div className=" md:col-start-4 md:col-end-10 xl:col-start-7 xl:col-end-10   grid grid-col-1 gap-6  ">
          <ImageDiv
            className={"md:inline-block hidden border-green-400 "}
            src={img6}
          />

          <ImageDiv className={"border-slate-600 "} src={img5} />
        </div>
      </div>
    </div>
  );
};

export default ImgGridRow2;
