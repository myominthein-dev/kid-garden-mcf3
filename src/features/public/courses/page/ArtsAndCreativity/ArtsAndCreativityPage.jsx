import React from "react";
import ArtCreativity from "../../components/ArtCreativity";
import CategoriesDetail from "../../CategoriesDetail";
import WhatYourKidWillLearn from "../../WhatYourKidWillLearn";
import HightLightCourses from "../../HightLightCourses";
import ArtsAndCreativityOne from "../../../../../assets/ourCoursesPage/People (1).png";
import ArtsAndCreativityVedio from "../../../../../assets/ourCoursesPage/ArtsAndCreativityVedio.mp4";
import RectangleTwo from "../../../../../assets/ourCoursesPage/Rectangle2.png";
const ArtsAndCreativityPage = () => {
  const learningSkill = [
    "Fosters Self-Expression",
    "Empowerment",
    "Cognitiveness",
    "Improves Motor Skills",
  ];
  return (
    <div className=" my-10 ">
      <ArtCreativity />
      <CategoriesDetail
        imgPeopleUrl={ArtsAndCreativityOne}
        flexFlow={"xl:flex-row-reverse"}
        DimaondGroupPositon={"top-1 right-[10%]"}
        headerText={" Art and Creative"}
        ParagText={
          "In early education play a crucial role in fostering self-expression, imagination, and emotional development in children. Through activities like drawing, painting, crafting, music, and movement, kids explore their unique ideas and feelings. These activities not only enhance fine motor skills and hand-eye coordination but also build confidence and problem-solving abilities."
        }
        LgParagTex={[
          "In early education play a crucial role in fostering self-expression, imagination, and emotional development in children. Through activities like drawing, painting, crafting, music, and movement, kids explore their unique ideas and feelings. ",
          "elements and how to use them to create their own artwork. Children will also practice fine motor skills by using tools like brushes, crayons, and scissors, improving hand-eye coordination.",
        ]}
      />
      {/* What Your Kid Will Learn */}
      <WhatYourKidWillLearn
        flexFlow={"flex-row-reverse"}
        text={
          " In art, kids will learn to express themselves through drawing, painting, and sculpting, fostering creativity and imagination. They will explore colors and shapes, developing an understanding of visual elements and how to use them to create their own artwork. Children will also practice fine motor skills by using tools like brushes, crayons, and scissors, improving hand-eye coordination."
        }
        learningSkill={learningSkill}
        ImageUrl={RectangleTwo}
      />
      {/* HeightLightCourses */}
      <HightLightCourses VedioUrl={ArtsAndCreativityVedio} />
    </div>
  );
};

export default ArtsAndCreativityPage;
