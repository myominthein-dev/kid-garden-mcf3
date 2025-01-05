import React from "react";
import CourseHeroSection from "../courses/CourseHeroSection";
import Container from "../components/Container";
import footerBg from "../../../assets/homePage/course_footer_bg.jpg";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const CoursePage = () => {
  return (
    <main>
      <Container>
        <CourseHeroSection />
        <Outlet />
      </Container>
      <Footer bgImg={footerBg} color={"lime"} />
    </main>
  );
};

export default CoursePage;
