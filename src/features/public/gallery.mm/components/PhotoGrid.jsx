import img1 from "../../../../assets/gallery/img1.png";

function PhotoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 max-w-5xl mx-auto">
      {/* First column */}
      <div className="space-y-4">
        <div className="aspect-square rounded-lg overflow-hidden shadow-md">
          <img src={img1} className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square rounded-lg overflow-hidden shadow-md">
          <img src={img1} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Center column - larger image */}
      <div className=" ">
        <div className="aspect-[2/4] rounded-lg overflow-hidden shadow-md">
          <img src={img1} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Third column */}
      <div className="space-y-4">
        <div className="aspect-square rounded-lg overflow-hidden shadow-md">
          <img src={img1} className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square rounded-lg overflow-hidden shadow-md">
          <img src={img1} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default PhotoGrid;
