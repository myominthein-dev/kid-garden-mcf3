import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import footerBg from "../../../assets/homePage/bg_footer.jpg";

import breadCrumb3 from "../../../assets/breadcrumb/breadcrumb-3.png";
import painted from "../../../assets/breadcrumb/painted-girl.png";
import ellipse from "../../../assets/breadcrumb/ellipse.png";
import ContactUsHeroSection from "../contact-us-components/ContactUsHeroSection";
import ContactUsFaqSection from "../contact-us-components/ContactUsFaqSection";
import Footer from "../components/Footer";

const ContactUsPage = () => {
  return (
    <>
      <BreadCrumb
        bgImg={breadCrumb3}
        leftImg={painted}
        leftImgShow={true}
        flexFlow={"flex-col-reverse"}
        rightImg={ellipse}
        rImgWidth={150}
        lImgPos={"md:-top-0 md:-left-44 relative bottom-[-28%] "}
        rImgPos={" right-44"}
        lImgWidth={600}
        title={"Contact Us"}
        currentPageTitle={"Contact Us"}
      />
      <ContactUsHeroSection />
      <ContactUsFaqSection />
      <Footer bgImg={footerBg} color={"orange"} />

    </>
  );
};

export default ContactUsPage;
