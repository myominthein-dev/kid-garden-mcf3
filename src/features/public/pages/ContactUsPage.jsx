import React from "react";
import ContactUsHeroSection from "../contact-us-components/ContactUsHeroSection";
import ContactMarketing from "../contact-us-components/ContactMarketing";
import ContactTeam from "../contact-us-components/ContactTeam";
import Footer from "../components/Footer";
import footerBg from "../../../assets/homePage/bg_footer.jpg";
const ContactUsPage = () => {
  return (
    <>
      <ContactUsHeroSection />
      <ContactMarketing />
      <ContactTeam />
      <Footer bgImg={footerBg} newsLetterBgColor={"orange"} />
    </>
  );
};

export default ContactUsPage;
