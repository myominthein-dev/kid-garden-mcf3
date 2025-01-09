import React, { lazy } from "react";

const CoursePage = lazy(() => import("../features/public/pages/CoursePage"));
const GalleryPage = lazy(() => import("../features/public/pages/GalleryPage"));
const HomePage = lazy(() => import("../features/public/pages/HomePage"));
const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../features/public/pages/ContactUsPage")
);
import coursesDetailRoute from "./coursesDetailRoute";
import PageLoading from "../features/public/components/PageLoading";
import UpcomingEventsPage from "../features/public/pages/UpcomingEventsPage";

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
  {
    path: "upcoming-events",
    element: <UpcomingEventsPage />,
  },
];

export default publicRoute;
