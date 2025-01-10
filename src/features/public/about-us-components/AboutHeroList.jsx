import React from "react";

const AboutHeroList = ({ content: { id, title, description, image } }) => {
  return (
    <div className="flex justify-center items-start gap-3 lg:gap-5">
      <div className="flex justify-center items-center">
        <img src={image} alt={title} className=" rounded-lg w-auto md:w-40 " />
      </div>
      <div className="flex flex-col  justify-center gap-3 lg:gap-5">
        <h3
          className={`font-pacifico text-lg md:text-xl ${
            id === 1
              ? " text-orange-500"
              : id === 2
              ? "text-lime-400"
              : id === 3
              ? " text-yellow-300"
              : ""
          }`}
        >
          {title}
        </h3>
        <p className=" w-auto lg:w-[80%] text-base lg:text-[20px] leading-[30px] text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutHeroList;
