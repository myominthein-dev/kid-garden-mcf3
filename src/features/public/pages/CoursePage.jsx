import React from "react";
import CourseHeroSection from "../courses/CourseHeroSection";
import Container from "../components/Container";
import footerBg from "../../../assets/homePage/course_footer_bg.jpg";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
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
        title={"Our Courses"}
        currentPageTitle={"Our Courses"}
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
