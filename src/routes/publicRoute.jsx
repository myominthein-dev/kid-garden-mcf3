import React, { lazy } from "react";

const CoursePage = lazy(() => import("../features/public/pages/CoursePage"));
const GalleryPage = lazy(() => import("../features/public/pages/GalleryPage"));
const HomePage = lazy(() => import("../features/public/pages/HomePage"));
const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../features/public/pages/ContactUsPage")
);
import coursesDetailRoute from "./coursesDetailRoute";
import UpcomingEventsPage from "../features/public/pages/UpcomingEventsPage";
import EventDetailPage from "../features/public/pages/EventDetailPage";

const publicRoute = [
  {
    index: "/",
    element: <HomePage />,
  },

  {
    path: "gallery",
    element: <GalleryPage />,
  },
  {
    path: "about-us",
    element: <AboutUsPage />,
  },
  {
    path: "/contact-us",
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
  {
    path: "upcoming-events/event-detail/:id",
    element: <EventDetailPage />,
  },
];

export default publicRoute;
