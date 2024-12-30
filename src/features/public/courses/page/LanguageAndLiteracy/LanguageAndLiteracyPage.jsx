import React from "react";
import LangLitetracy from "../../components/LangLitetracy";
import People from "../../../../../assets/ourCoursesPage/People.png";
import RectangleImg from "../../../../../assets/ourCoursesPage/Rectangle.png";
import CategoriesDetail from "../../CategoriesDetail";
import WhatYourKidWillLearn from "../../WhatYourKidWillLearn";
import HightLightCourses from "../../HightLightCourses";
import LanguageAndLiteracyVedio from "../../../../../assets/ourCoursesPage/LanguageAndLiteracy.mp4";
import Footer from "../../../components/Footer";

const LanguageAndLiteracyPage = () => {
  const learningSkill = [
    "Speaking and Listening",
    "Reading Readiness",
    "Phonics and Vocabulary",
    "Writing Skills",
  ];
  return (
    <div className=" my-10">
      <LangLitetracy/>
      <CategoriesDetail
        imgPeopleUrl={People}
        flexFlow={"flex-row"}
        DimaondGroupPositon={"top-0 left-[45%]"}
        headerText={" Language and Literacy"}
        ParagText={
          "We focuses on helping young children develop foundational         communication skills, including speaking, listening, reading, andwriting. Through storytelling, phonics, and vocabulary-building      activities, children learn to express themselves, understand others,and explore the joy of language. These skills lay the groundwork for academic success and lifelong learning."
        }
      />
      {/* What Your Kid Will Learn */}
      <WhatYourKidWillLearn
        flexFlow={"flex-row"}
        text={
          " Focuses on helping young children develop foundational communication skills, including speaking, listening, reading, and writing. Through storytelling, phonics, and vocabulary-building activities, children learn to express themselves, understand others, and explore the joy of language. These skills lay the groundwork for academic success and lifelong learning."
        }
        learningSkill={learningSkill}
        ImageUrl={RectangleImg}
      />
      {/* HeightLightCourses */}
      <HightLightCourses VedioUrl={LanguageAndLiteracyVedio} />
    </div>
  );
 
};

export default LanguageAndLiteracyPage;
