import React from "react";
import { heroContents } from "./data";
import ContactHeroList from "./ContactHeroList";

const ContactHeroListGroup = () => {
  return (
    <div className="w-full flex flex-col items-start gap-5">
      {heroContents.map((content) => (
        <ContactHeroList key={content.id} content={content} />
      ))}
    </div>
  );
};

export default ContactHeroListGroup;
