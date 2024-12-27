import React, { useEffect, useState } from "react";
import newsLetteLogo from "../../../assets/homePage/flower_newsletter.png";
import rightArrow from "../../../assets/homePage/arrow-right.png";
import { initial } from "lodash";
import Button from "./Button";

const NewsLetter = ({ color }) => {
  return (
    <div
      className={`max-w-[1062px] px-14 py-7 rounded-lg relative mx-auto top-16 h-[212px] bg-${color}-500 border-2 border-black border-dashed`}
    >
      <div className=" relative">
        <div className=" h-10 w-10 absolute left-0 top-0">
          <img src={`${newsLetteLogo}`} alt="" />
        </div>
        <div className="max-w-[620px] mx-auto ">
          <h1 className="text-2xl leading-9 my-2 text-white font-poppin font-bold text-center">
            "Stay Connected with Us!"
          </h1>
          <p className="text-white mx-auto text-center font-roboto">
            "Join our newsletter to stay updated on the latest school news,
            upcoming events, and special programs. Sign up today and never miss
            a moment!"
          </p>
          <div className=" flex justify-between max-w-[389px] h-[36px] mx-auto my-2">
            <input
              placeholder="Email Address"
              className="bg-white h-full rounded-xl border-none"
              type="email"
            />
            <Button label="Subscribe" bgColor="orange-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
