import { lazy } from "react";
import CoursePage from "../features/public/pages/CoursePage";
import GalleryPage from "../features/public/pages/GalleryPage";
import coursesDetailRoute from "./coursesDetailRoute";
import HomePage from "../features/public/pages/HomePage";
import AboutUsPage from "../features/public/pages/AboutUsPage";
import ContactUsPage from "../features/public/pages/ContactUsPage";


const publicRoute = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "about-us",
    element: <AboutUsPage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "our-courses",
    element: <CoursePage />,
    children: [...coursesDetailRoute],
  },
  {
    path: "gallery",
    element: <GalleryPage />,
  },
];

export default publicRoute;
