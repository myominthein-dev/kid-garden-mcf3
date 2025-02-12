import React from "react";

const SeeMoreBtn = ({ className, onClick }) => {
  return (
    <div className=" flex justify-center my-6">
      <div
        className={`${className} py-3 px-6 bg-fuchsia-600 rounded-2xl font-medium font-poppin text-white text-sm leading-4`}
        onClick={onClick}
      >
        ဓာတ်ပုံအားလုံးကို ကြည့်ရှုပါ
      </div>
    </div>
  );
};

export default SeeMoreBtn;
