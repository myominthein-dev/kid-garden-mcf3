import React from "react";
import { heroContents } from "./data";
import AboutHeroList from "./AboutHeroList";

const AboutHeroListGroup = () => {
  return (
    <div className="w-full flex flex-col items-start gap-5">
      {heroContents.map((content) => (
        <AboutHeroList key={content.id} content={content} />
      ))}
    </div>
  );
};

export default AboutHeroListGroup;
