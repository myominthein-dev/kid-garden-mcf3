import React from "react";

const ContactHeroList = ({ content: { id, title, description, image } }) => {
  return (
    <div className="flex  items-start gap-5">
      <div>
        <img src={image} alt={title} className=" rounded-lg h-20" />
      </div>
      <div className="flex flex-col  justify-center gap-5">
        <h3
          className={`font-pacifico text-xl ${
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
        <p className="w-[400px] text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ContactHeroList;
