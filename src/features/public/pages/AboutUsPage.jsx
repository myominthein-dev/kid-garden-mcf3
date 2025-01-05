import React from "react";
import AboutUsHeroSection from "../about-us-components/AboutUsHeroSection";
import AboutMarketing from "../about-us-components/AboutMarketing";
import AboutTeam from "../about-us-components/AboutTeam";
import Footer from "../components/Footer";
import footerBg from "../../../assets/homePage/bg_footer.jpg";
const AboutUsPage = () => {
  return (
    <>
      <AboutUsHeroSection />
      <AboutMarketing />
      <AboutTeam />
      <Footer bgImg={footerBg} color={"orange"} />
    </>
  );
};

export default AboutUsPage;
