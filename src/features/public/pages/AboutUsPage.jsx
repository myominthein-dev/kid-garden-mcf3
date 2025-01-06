import React from "react";
import AboutUsHeroSection from "../about-us-components/AboutUsHeroSection";
import AboutMarketing from "../about-us-components/AboutMarketing";
import AboutTeam from "../about-us-components/AboutTeam";
import Footer from "../components/Footer";
import footerBg from "../../../assets/homePage/bg_footer.jpg";
import BreadCrumb from "../components/BreadCrumb";

import breadCrumb3 from "../../../assets/breadcrumb/breadcrumb-3.png";
import painted from "../../../assets/breadcrumb/painted-girl.png";
import ellipse from "../../../assets/breadcrumb/ellipse.png";
const AboutUsPage = () => {
  return (
    <>
      <BreadCrumb
        bgImg={breadCrumb3}
        leftImg={painted}
        rightImg={ellipse}
        rImgWidth={150}
        lImgPos={"-top-0 -left-44"}
        rImgPos={" right-44"}
        lImgWidth={600}
        title={"About Us"}
        currentPageTitle={"About Us"}
      />
      <AboutUsHeroSection />
      <AboutMarketing />
      <AboutTeam />
      <Footer bgImg={footerBg} color={"orange"} />
    </>
  );
};

export default AboutUsPage;
