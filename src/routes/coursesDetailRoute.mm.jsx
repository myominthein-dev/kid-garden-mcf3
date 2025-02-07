import { lazy } from "react";

const LanguageAndLiteracyPage = lazy(() =>
  import(
    "../features/public/courses.mm/page/LanguageAndLiteracy/LanguageAndLiteracyPage"
  )
);
const MathAndProblemSolvingPage = lazy(() =>
  import(
    "../features/public/courses.mm/page/MathAndProblemSolving/MathAndProblemSolvingPage"
  )
);
const SocialDevelopmentPage = lazy(() =>
  import(
    "../features/public/courses.mm/page/SocialDevelopment/SocialDevelopmentPage"
  )
);
const ArtsAndCreativityPage = lazy(() =>
  import(
    "../features/public/courses.mm/page/ArtsAndCreativity/ArtsAndCreativityPage"
  )
);

const coursesDetailRoute = [
  {
    index: true,
    element: <LanguageAndLiteracyPage />,
  },
  {
    path: "arts-and-creativity",
    element: <ArtsAndCreativityPage />,
  },
  {
    path: "math-and-problem-solving",
    element: <MathAndProblemSolvingPage />,
  },
  {
    path: "social-development",
    element: <SocialDevelopmentPage />,
  },
];

export default coursesDetailRoute;
