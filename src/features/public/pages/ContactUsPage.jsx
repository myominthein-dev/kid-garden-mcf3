import React from "react";
import BreadCrumb from "../components/BreadCrumb";

import breadCrumb3 from "../../../assets/breadcrumb/breadcrumb-3.png";
import painted from "../../../assets/breadcrumb/painted-girl.png";
import ellipse from "../../../assets/breadcrumb/ellipse.png";
import ContactUsHeroSection from "../contact-us-components/ContactUsHeroSection";
import ContactUsFaqSection from "../contact-us-components/ContactUsFaqSection";

const ContactUsPage = () => {
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
        title={"Contact Us"}
        currentPageTitle={"Contact Us"}
      />
      <ContactUsHeroSection />
      <ContactUsFaqSection />
    </>
  );
};

export default ContactUsPage;
