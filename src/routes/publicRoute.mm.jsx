import { lazy } from "react";

const CoursePage = lazy(() => import("../features/public/pages.mm/CoursePage"));
const GalleryPage = lazy(() =>
  import("../features/public/pages.mm/GalleryPage")
);
const HomePage = lazy(() => import("../features/public/pages.mm/HomePage"));
const AboutUsPage = lazy(() =>
  import("../features/public/pages.mm/AboutUsPage")
);
const ContactUsPage = lazy(() =>
  import("../features/public/pages.mm/ContactUsPage")
);
import coursesDetailRoute from "./coursesDetailRoute.mm";
import UpcomingEventsPage from "../features/public/pages.mm/UpcomingEventsPage";
import EventDetailPage from "../features/public/pages.mm/EventDetailPage";

export const publicRoute = [
  {
    path: "/mm",
    element: <HomePage />,
  },

  {
    path: "/mm/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/mm/about-us",
    element: <AboutUsPage />,
  },
  {
    path: "/mm/contact-us",
    element: <ContactUsPage />,
  },

  {
    path: "/mm/our-courses",
    element: <CoursePage />,
    children: [...coursesDetailRoute],
  },
  {
    path: "/mm/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/mm/upcoming-events",
    element: <UpcomingEventsPage />,
  },
  {
    path: "/mm/upcoming-events/event-detail/:id",
    element: <EventDetailPage />,
  },
];
