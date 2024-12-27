import React from "react";
import CourseHeroSection from "../courses/CourseHeroSection";
import Container from "../components/Container";
import { Outlet } from "react-router-dom";

const CoursePage = () => {
  return (
    <main>
      <Container>
        <CourseHeroSection />
        <Outlet />
      </Container>
    </main>
  );
};

export default CoursePage;
