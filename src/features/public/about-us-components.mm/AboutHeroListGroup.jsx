import React from "react";
import { heroContents } from "./mmData";
import AboutHeroList from "./AboutHeroList";

const AboutHeroListGroup = () => {
  return (
    <div className="w-full flex flex-col items-start gap-3 lg:gap-5 col-span-1 py-8">
      {heroContents.map((content) => (
        <AboutHeroList key={content.id} content={content} />
      ))}
    </div>
  );
};

export default AboutHeroListGroup;
