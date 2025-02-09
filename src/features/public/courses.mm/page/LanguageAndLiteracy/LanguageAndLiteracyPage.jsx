import React from "react";
import LangLitetracy from "../../components/LangLitetracy";
import People from "../../../../../assets/ourCoursesPage/People.png";
import RectangleImg from "../../../../../assets/ourCoursesPage/Rectangle.png";
import CategoriesDetail from "../../CategoriesDetail";
import WhatYourKidWillLearn from "../../WhatYourKidWillLearn";
import HightLightCourses from "../../HightLightCourses";
import LanguageAndLiteracyVedio from "../../../../../assets/ourCoursesPage/LanguageAndLiteracy.mp4";

const LanguageAndLiteracyPage = () => {
  const learningSkill = [
    "ကိုယ်ကျင့်တရား",
    "စာဖတ်ခြင်းနှင့် ဗဟုသုတ",
    "ဖန်တီးမှုစာပေ",
    "စာရေးသားစွမ်းရည်",
  ];
  return (
    <div className=" my-10 ">
      <LangLitetracy />
      <CategoriesDetail
        imgPeopleUrl={People}
        flexFlow={"xl:flex-row "}
        DimaondGroupPositon={
          "xl:top-0 xl:left-[45%] lg:top-1 lg:right-[10%] top-0 left-[10%]"
        }
        headerText={"ဘာသာစကားနှင့် ယဉ်ကျေးမှု"}
        ParagText={
          "ဘာသာစကားနှင့် ယဉ်ကျေးမှုဆိုသည်မှာ စာဖတ်ခြင်း၊ စာရေးခြင်းနှင့် စာပေများကို နားလည်နိုင်စွမ်းကို ဆိုလိုသည်။ ၎င်းတွင် အတွေးအခေါ်များကို ထိထိမိမိ ဖော်ပြနိုင်စွမ်းနှင့် ဘာသာစကားကို ထိရောက်စွာ အသုံးချနိုင်စွမ်းလည်း ပါဝင်သည်။"
        }
        LgParagTex={[
          "ဘာသာစကားနှင့် ယဉ်ကျေးမှုဆိုသည်မှာ စာဖတ်ခြင်း၊ စာရေးခြင်းနှင့် စာပေများကို နားလည်နိုင်စွမ်းကို ဆိုလိုသည်။ ",
          "၎င်းတွင် အတွေးအခေါ်များကို ထိထိမိမိ ဖော်ပြနိုင်စွမ်းနှင့် ဘာသာစကားကို ထိရောက်စွာ အသုံးချနိုင်စွမ်းလည်း ပါဝင်သည်။",
        ]}
      />
      {/* What Your Kid Will Learn */}
      <WhatYourKidWillLearn
        flexFlow={"flex-row"}
        text={
          " သင်တန်းအမျိုးအစားများ သည် သင်တန်းများကို ဘာသာရပ်၊ ရည်ရွယ်ချက်နှင့် လေ့လာမှုပုံစံအလိုက် ခွဲခြားထားခြင်းဖြစ်သည်။ ဥပမာ - ပညာရေး၊ အလုပ်အကိုင်၊ နည်းပညာ၊ ဘာသာစကားစသည့် အမျိုးအစားများ ပါဝင်သည်။"
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
