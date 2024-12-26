import { lazy } from "react";
import CoursePage from "../features/public/pages/CoursePage";
import GalleryPage from "../features/public/pages/GalleryPage";

const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() => import("../features/public/pages/ContactUsPage"));
const HomePage = lazy(() => import("../features/public/pages/HomePage"));

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
    element: < CoursePage/>,
  },
  {
    path: "gallery",
    element: <GalleryPage />,
  },
];

export default publicRoute;
