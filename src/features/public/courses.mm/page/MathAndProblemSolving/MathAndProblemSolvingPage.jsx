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
    "ကိုယ်ကျင့်တရား",
    "ဖန်တီးမှုစာပေ",
    "စာဖတ်ခြင်းနှင့် ဗဟုသုတ",
    "စာရေးသားစွမ်းရည်",
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
        headerText={"သင်္ချာနှင့် ပြဿနာဖြေရှင်းခြင်း"}
        ParagText={
          "ကလေးများ၏ နံပါတ်များ၊ ပုံသဏ္ဍာန်များ၊ပုံစံများနှင့်ဆက်စပ်မှုများကို နားလည်နိုင်စေရန်ကျွမ်းကျင်မှုကိုဖွံ့ဖြိုးတိုးတက်စေရန်အာရုံစိုက်ရသည်။ ရေတွက်ခြင်း၊ အမျိုးအစားခွဲခြင်း၊ တိုင်းတာခြင်းနှင့် ရိုးရှင်းသော ပဟေဠိများဖြေရှင်းခြင်းကဲ့သို့သောလှုပ်ရှားမှုများမှတဆင့်ကလေးများသည် စိန်ခေါ်မှုများကို သင်္ချာဆန်၍ သင်ယူနိုင်ပြီး ယုတ္တိပညာနှင့် ဝါရင့်အတွေးအခေါ်များကို ဖွံ့ဖြိုးတိုးတက်စေသည်။"
        }
        LgParagTex={[
          "ကလေးများ၏ နံပါတ်များ၊ ပုံသဏ္ဍာန်များ၊ပုံစံများနှင့်ဆက်စပ်မှုများကို နားလည်နိုင်စေရန်ကျွမ်းကျင်မှုကိုဖွံ့ဖြိုးတိုးတက်စေရန်အာရုံစိုက်ရသည်။ ",
          " ရေတွက်ခြင်း၊ အမျိုးအစားခွဲခြင်း၊ တိုင်းတာခြင်းနှင့် ရိုးရှင်းသော ပဟေဠိများဖြေရှင်းခြင်းကဲ့သို့သောလှုပ်ရှားမှုများမှတဆင့်ကလေးများသည် စိန်ခေါ်မှုများကို သင်္ချာဆန်၍ သင်ယူနိုင်ပြီး ယုတ္တိပညာနှင့် ဝါရင့်အတွေးအခေါ်များကို ဖွံ့ဖြိုးတိုးတက်စေသည်။",
        ]}
      />
      {/* What Your Kid Will Learn */}
      <WhatYourKidWillLearn
        flexFlow={"flex-row"}
        text={
          "သင်တန်းအမျိုးအစားများ သည် သင်တန်းများကို ဘာသာရပ်၊ ရည်ရွယ်ချက်နှင့် လေ့လာမှုပုံစံအလိုက် ခွဲခြားထားခြင်းဖြစ်သည်။ ဥပမာ - ပညာရေး၊ အလုပ်အကိုင်၊ နည်းပညာ၊ ဘာသာစကားစသည့် အမျိုးအစားများ ပါဝင်သည်။"
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
