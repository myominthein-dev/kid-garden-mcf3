import React from "react";
import { teachers } from "./data";
import ContactTeamCard from "./ContactTeamCard";

const ContactTeamGroup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center  gap-5 w-full">
      {teachers.map((teacher) => (
        <ContactTeamCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
};

export default ContactTeamGroup;
