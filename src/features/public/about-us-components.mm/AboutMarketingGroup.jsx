import React from "react";
import { aboutMarkets } from "./mmData";
import AboutMarketingCard from "./AboutMarketingCard";

const AboutMarketingGroup = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2  gap-5 w-full justify-center items-center">
      {aboutMarkets.map((market) => (
        <AboutMarketingCard key={market.id} content={market} />
      ))}
    </div>
  );
};

export default AboutMarketingGroup;
