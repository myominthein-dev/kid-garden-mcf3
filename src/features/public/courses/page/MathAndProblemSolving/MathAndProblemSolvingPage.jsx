import React from "react";
import MathAndCriticalThinking from "../../components/MathAndCriticalThinking";
import CategoriesDetail from "../../CategoriesDetail";
import ArtsAndCreativityOne from "../../../../../assets/ourCoursesPage/People (2).png";
import WhatYourKidWillLearn from "../../WhatYourKidWillLearn";
import RectangleTwo from "../../../../../assets/ourCoursesPage/Rectangle3.png";
import MathAndProblemSolvingVedio from "../../../../../assets/ourCoursesPage/MathAndProblemSolvingVedio.mp4";
import HightLightCourses from "../../HightLightCourses";

const MathAndProblemSolvingPage = () => {
  const learningSkill = [
    "Use Hands-On Activities",
    "Relate Math to Daily Life",
    "Incorporate Games",
    "Encourage Critical Thinking",
  ];
  return (
    <div className=" my-10 ">
      <MathAndCriticalThinking />
      <CategoriesDetail
        imgPeopleUrl={ArtsAndCreativityOne}
        flexFlow={"xl:flex-row"}
        DimaondGroupPositon={
          "xl:top-0 xl:left-[45%] top-0  md:top-1 right-[10%]"
        }
        headerText={" Math and Problem-Solving"}
        ParagText={
          "in early education focus on developing children’s ability to understand numbers, shapes, patterns, and relationships. Through engaging activities like counting, sorting, measuring, and solving simple puzzles, children learn to approach challenges logically and think critically."
        }
        LgParagTex={[
          "in early education focus on developing children’s ability to understand numbers, shapes, patterns, and relationships. Through engaging activities like ",
          "counting, sorting, measuring, and solving simple puzzles, children learn to approach challenges logically and think critically.",
        ]}
      />
      {/* What Your Kid Will Learn */}
      <WhatYourKidWillLearn
        flexFlow={"flex-row"}
        text={
          "Kids will learn to count and recognize numbers, helping them understand basic numerical concepts. They will explore addition and subtraction through interactive activities, developing early arithmetic skills. Children will also learn to identify and create patterns using objects, shapes, or colors. Basic measurement skills will be introduced, such as comparing sizes, lengths, and weights."
        }
        learningSkill={learningSkill}
        ImageUrl={RectangleTwo}
      />
      {/* HeightLightCourses */}
      <HightLightCourses VedioUrl={MathAndProblemSolvingVedio} />
    </div>
  );
};

export default MathAndProblemSolvingPage;
