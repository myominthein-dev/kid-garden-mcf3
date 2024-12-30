import { lazy, Suspense } from "react";
import LanguageAndLiteracyPage from "../features/public/courses/page/LanguageAndLiteracy/LanguageAndLiteracyPage";
import ArtsAndCreativityPage from "../features/public/courses/page/ArtsAndCreativity/ArtsAndCreativityPage";
import MathAndProblemSolvingPage from "../features/public/courses/page/MathAndProblemSolving/MathAndProblemSolvingPage";
import SocialDevelopmentPage from "../features/public/courses/page/SocialDevelopment/SocialDevelopmentPage";

// const LanguageAndLiteracyPage = lazy(() =>
//   import(
//     "../features/public/courses/page/LanguageAndLiteracy/LanguageAndLiteracyPage"
//   )
// );
// const MathAndProblemSolvingPage = lazy(() =>
//   import(
//     "../features/public/courses/page/MathAndProblemSolving/MathAndProblemSolvingPage"
//   )
// );
// const SocialDevelopmentPage = lazy(() =>
//   import(
//     "../features/public/courses/page/SocialDevelopment/SocialDevelopmentPage"
//   )
// );
// const ArtsAndCreativityPage = lazy(() =>
//   import(
//     "../features/public/courses/page/ArtsAndCreativity/ArtsAndCreativityPage"
//   )
// );

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
