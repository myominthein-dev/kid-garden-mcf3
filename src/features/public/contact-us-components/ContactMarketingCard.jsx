import React from "react";

const ContactMarketingCard = ({
  content: { id, title, description, image },
}) => {
  return (
    <div
      className={`col-span-1 flex flex-col  justify-center items-start p-4 gap-5 rounded-lg bg-white ${
        id === 2
          ? "mt-8"
          : id === 4
          ? "mt-8"
          : id === 1
          ? "mb-8"
          : id === 3
          ? "mb-8"
          : ""
      }`}
    >
      <img src={image} alt={title} className=" rounded-lg h-20" />
      <h3
        className={`font-pacifico text-xl ${
          id === 1
            ? " text-orange-500"
            : id === 2
            ? "text-orange-500"
            : id === 3
            ? " text-pink-500"
            : id === 4
            ? " text-lime-400"
            : ""
        }`}
      >
        {title}
      </h3>
      <p className=" text-base text-gray-700">{description}</p>
    </div>
  );
};

export default ContactMarketingCard;
