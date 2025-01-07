import { lazy } from "react";

const LanguageAndLiteracyPage = lazy(() =>
  import(
    "../features/public/courses/page/LanguageAndLiteracy/LanguageAndLiteracyPage"
  )
);
const MathAndProblemSolvingPage = lazy(() =>
  import(
    "../features/public/courses/page/MathAndProblemSolving/MathAndProblemSolvingPage"
  )
);
const SocialDevelopmentPage = lazy(() =>
  import(
    "../features/public/courses/page/SocialDevelopment/SocialDevelopmentPage"
  )
);
const ArtsAndCreativityPage = lazy(() =>
  import(
    "../features/public/courses/page/ArtsAndCreativity/ArtsAndCreativityPage"
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
