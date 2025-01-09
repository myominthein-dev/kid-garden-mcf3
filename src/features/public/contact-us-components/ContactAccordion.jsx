import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "animate.css";
const ContactAccordion = ({ id, question, answer, isOpen, openAccordion }) => {
  return (
    <div>
      <div
        onClick={() => {
          openAccordion(id);
        }}
        className={`font-roboto w-full flex justify-between items-start bg-transparent p-3 rounded border-b-2 border-gray-200 select-none cursor-pointer hover:bg-orange-100 hover:text-orange-600 ${
          isOpen && "bg-orange-100 text-orange-600 border-b-0 "
        }`}
      >
        <h1 className=" text-lg font-mono font-semibold text-orange-600">
          {question}
        </h1>
        <MdOutlineKeyboardArrowDown
          className={`w-5 h-5  text-orange-500 transition-all duration-200 ${
            isOpen && "rotate-180"
          }`}
        />
      </div>
      {isOpen && (
        <div
          className={` bg-orange-50 border-b border-gray-200 p-3 text-gray-500 animate__animated animate__fadeIn duration-200`}
        >
          <p className="text-base">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default ContactAccordion;
