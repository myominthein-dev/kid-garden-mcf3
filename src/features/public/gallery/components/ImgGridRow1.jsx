import ImageDiv from "./ImageDiv";
import img1 from "../../../../assets/gallery/img1.png";
import img2 from "../../../../assets/gallery/img2.png";
import img3 from "../../../../assets/gallery/img3.png";
import img4 from "../../../../assets/gallery/img4.png";
import img5 from "../../../../assets/gallery/img5.png";
import img6 from "../../../../assets/gallery/img6.png";

const ImgGridRow1 = () => {
  return (
    <div>
      <div
        style={{ gridAutoFlow: "column", direction: "rtl" }}
        className=" w-full h-[640px] grid grid-cols-9 direction-rtl  gap-8"
      >
        {/* left  */}
        <div className=" md:col-start-1 md:col-end-6  xl:col-start-1 xl:col-end-5   grid justify-between  gap-6  ">
          <ImageDiv className={"border-green-500 "} src={img1} />
          <div className="  grid grid-cols-2  gap-6 ">
            <ImageDiv className={"border-red-600 "} src={img5} />
            <ImageDiv className={"border-red-600 "} src={img4} />
          </div>
        </div>

        {/* middle  */}
        <div className=" md:col-start-6 md:col-end-10 xl:col-span-2 h-full     ">
          <ImageDiv className={"border-orange-500"} src={img2} />
        </div>
        {/* right*/}
        <div className=" hidden xl:col-start-7 xl:col-end-10 xl:col-span-3  xl:grid grid-col-1 gap-6  ">
          <ImageDiv className={"border-green-500 "} src={img3} />

          <ImageDiv className={"border-slate-600 "} src={img6} />
        </div>
      </div>
    </div>
  );
};

export default ImgGridRow1;
