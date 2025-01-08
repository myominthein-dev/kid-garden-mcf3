import React from "react";
import SocialDevelopment from "../../components/SocialDevelopment";
import CategoriesDetail from "../../CategoriesDetail";
import WhatYourKidWillLearn from "../../WhatYourKidWillLearn";
import HightLightCourses from "../../HightLightCourses";
import ArtsAndCreativityOne from "../../../../../assets/ourCoursesPage/People (3).png";
import RectangleTwo from "../../../../../assets/ourCoursesPage/Rectangle4.png";
import SocialDevelopmentPageVedio from "../../../../../assets/ourCoursesPage/SocialDevelopmentVedio.mp4";

const SocialDevelopmentPage = () => {
  const learningSkill = [
    "Use Hands-On Activities",
    "Relate Math to Daily Life",
    "Incorporate Games",
    "Encourage Critical Thinking",
  ];
  return (
    <div className=" my-10 ">
      <SocialDevelopment />
      <CategoriesDetail
        imgPeopleUrl={ArtsAndCreativityOne}
        flexFlow={"flex-row"}
        DimaondGroupPositon={"xl:top-0 xl:left-[45%] lg:top-1 lg:right-[10%]"}
        headerText={" Math and Problem-Solving"}
        ParagText={
          "in early education focus on developing children’s ability to understand numbers, shapes, patterns, and relationships. Through engaging activities like counting, sorting, measuring, and solving simple puzzles, children learn to approach challenges logically and think critically."
        }
        LgParagTex={[
          "We refers to the process by which children learn to interact with others, build relationships, and understand social norms. It involves the development of skills like communication,",
          " empathy, teamwork, and conflict resolution. Through group activities, play, and guided interaction, children learn how to share, cooperate.",
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
      <HightLightCourses VedioUrl={SocialDevelopmentPageVedio} />
    </div>
  );
};

export default SocialDevelopmentPage;
