const ImageDiv = ({ className, src }) => {
  return (
    <>
      <div
        className={`border-2 border-dashed rounded-2xl border-opacity-50 overflow-hidden h-full ${className} `}
      >
        <img className=" h-full w-full object-cover" src={src} alt="" />
      </div>
    </>
  );
};

export default ImageDiv;
