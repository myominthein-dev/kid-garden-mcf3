import React from "react";
import { contactMarkets } from "./data";
import ContactMarketingCard from "./ContactMarketingCard";

const ContactMarketingGroup = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2  gap-5">
      {contactMarkets.map((market) => (
        <ContactMarketingCard key={market.id} content={market} />
      ))}
    </div>
  );
};

export default ContactMarketingGroup;
