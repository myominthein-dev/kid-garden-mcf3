import img1 from "../../../../assets/gallery/grid3_1.png";
import img2 from "../../../../assets/gallery/grid3_2.png";
import img3 from "../../../../assets/gallery/grid3_3.png";
import img4 from "../../../../assets/gallery/grid3_4.png";
import img5 from "../../../../assets/gallery/grid3_5.png";
import img6 from "../../../../assets/gallery/grid3_6.png";
import ImageDiv from "./ImageDiv";
const ImgGridRow3 = () => {
  return (
    <div>
      <div className=" w-full h-[640px] grid grid-cols-9  gap-8">
        {/* left */}
        <div className="  col-start-1 col-end-5   grid justify-between  gap-6  ">
          <ImageDiv className={"border-green-300 "} src={img1} />
          <div className="  grid grid-cols-2  gap-6 ">
            <ImageDiv className={"border-red-400 "} src={img2} />
            <ImageDiv className={"border-fuchsia-400 "} src={img3} />
          </div>
        </div>
        {/* middle*/}
        <div className="col-start-5 col-end-8 col-span-3  grid grid-col-1 gap-6  ">
          <ImageDiv className={"border-green-400 "} src={img4} />

          <ImageDiv className={"border-slate-600 "} src={img5} />
        </div>
        {/* right  */}
        <div className=" col-start-8 col-end-10 col-span-2 h-full     ">
          <ImageDiv className={"border-orange-400 "} src={img6} />
        </div>
      </div>
    </div>
  );
};

export default ImgGridRow3;
