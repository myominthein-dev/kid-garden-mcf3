import { lazy } from "react";
const GalleryPage = lazy(() => import("../features/public/pages/GalleryPage"));

const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../features/public/pages/ContactUsPage")
);
const HomePage = lazy(() => import("../features/public/pages/HomePage"));
const OurCoursePage = lazy(() =>
  import("../features/public/pages/OurCoursePage")
);

const publicRoute = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "our-courses",
    element: <OurCoursePage />,
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
    path: "contact-us",
    element: <ContactUsPage />,
  },
];

export default publicRoute;
