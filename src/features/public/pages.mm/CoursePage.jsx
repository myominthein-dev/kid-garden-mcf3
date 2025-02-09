import React from "react";
import CourseHeroSection from "../courses.mm/CourseHeroSection";
import Container from "../components/Container";
import footerBg from "../../../assets/homePage/course_footer_bg.jpg";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.mm";
import BreadCrumb from "../components/BreadCrumb";
import breadCrumb1 from "../../../assets/breadcrumb/breadcrumb-1.jpg";
import youngGirl from "../../../assets/breadcrumb/young-girl.png";
import rabbit from "../../../assets/breadcrumb/rabbit.png";

const CoursePage = () => {
  return (
    <main>
      <BreadCrumb
        bgImg={breadCrumb1}
        leftImg={youngGirl}
        rightImg={rabbit}
        leftImgShow={false}
        title={"ကျွန်ုပ်တို့၏သင်ရိုးများ"}
        currentPageTitle={"ကျွန်ုပ်တို့၏သင်ရိုးများ"}
        flexFlow={"flex-col"}
      />
      <Container>
        <CourseHeroSection />
        <Outlet />
      </Container>
      <Footer bgImg={footerBg} color={"lime"} />
    </main>
  );
};

export default CoursePage;
