const ImageDiv = ({ className, src }) => {
  return (
    <>
      <div
        className={`border-2 border-dashed rounded-md overflow-hidden h-full ${className}`}
      >
        <img className=" h-full w-full object-cover" src={src} alt="" />
      </div>
    </>
  );
};

export default ImageDiv;
