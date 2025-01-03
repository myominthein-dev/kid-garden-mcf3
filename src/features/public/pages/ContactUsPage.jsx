import React from "react";
import ContactUsHeroSection from "../contact-us-components/ContactUsHeroSection";
import ContactMarketing from "../contact-us-components/ContactMarketing";
import ContactTeam from "../contact-us-components/ContactTeam";

const ContactUsPage = () => {
  return (
    <>
      <ContactUsHeroSection />
      <ContactMarketing />
      <ContactTeam />
    </>
  );
};

export default ContactUsPage;
