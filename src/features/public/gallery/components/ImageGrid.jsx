import ImageDiv from "./ImageDiv";
import img1 from "../../../../assets/gallery/img1.png";
import img2 from "../../../../assets/gallery/img2.png";
import img3 from "../../../../assets/gallery/img3.png";
import img4 from "../../../../assets/gallery/img4.png";
import img5 from "../../../../assets/gallery/img5.png";
import img6 from "../../../../assets/gallery/img6.png";

const ImageGrid = () => {
  return (
    <div>
      <div className=" w-full h-[640px] grid grid-cols-9  gap-4">
        {/* left  */}
        <div className="  col-start-1 col-end-5   grid justify-between  gap-6  ">
          <div
            className={`border-2 border-dashed rounded-lg border-green-500  overflow-hidden h-full w-full`}
          >
            <img className=" h-full w-full object-cover" src={img1} alt="" />
          </div>
          <div className="  grid grid-cols-2  gap-6 ">
            <div
              className={`border-2 border-dashed border-red-500 rounded-lg overflow-hidden h-full w-full`}
            >
              <img className=" h-full w-full object-cover" src={img5} alt="" />
            </div>
            <div
              className={`border-2 border-dashed border-red-500 rounded-lg overflow-hidden h-full w-full`}
            >
              <img className=" h-full w-full object-cover" src={img4} alt="" />
            </div>
          </div>
        </div>

        {/* middle  */}
        <div className=" col-span-2 h-full     ">
          <div
            className={`border-2 border-dashed   border-red-500 rounded-lg overflow-hidden h-full w-full `}
          >
            <img className=" h-full w-full object-cover" src={img2} alt="" />
          </div>
        </div>
        {/* right*/}
        <div className="col-start-6-col-end-9 col-span-3  grid grid-col-1 gap-6  ">
          <div
            className={`border-2 border-green-500 border-dashed rounded-lg overflow-hidden h-full w-full`}
          >
            <img className=" h-full w-full object-cover" src={img3} alt="" />
          </div>

          <div
            className={`border-2 border-green-500 border-dashed rounded-lg overflow-hidden h-full w-full`}
          >
            <img className=" h-full w-full object-cover" src={img6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
