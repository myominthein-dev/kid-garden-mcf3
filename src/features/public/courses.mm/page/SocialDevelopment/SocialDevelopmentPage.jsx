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
    "ကိုယ်ကျင့်တရား",
    "ဖန်တီးမှုစာပေ",
    "စာဖတ်ခြင်းနှင့် ဗဟုသုတ",
    "စာရေးသားစွမ်းရည်",
  ];
  return (
    <div className=" my-10 ">
      <SocialDevelopment />
      <CategoriesDetail
        imgPeopleUrl={ArtsAndCreativityOne}
        flexFlow={"xl:flex-row"}
        DimaondGroupPositon={
          "xl:top-0 xl:left-[45%] hidden md:block md:top-1 md:right-[10%]"
        }
        headerText={"လူမှုဖွံ့ဖြိုးတိုးတက်မှု"}
        ParagText={
          "ဆက်သွယ်ပြောဆိုခြင်း၊နားလည်မှုအဖွဲ့လိုက်လုပ်ဆောင်ခြင်းနှင့် တိုင်ပင်ဖြေရှင်းမှုကဲ့သို့သောကျွမ်းကျင်မှုများဖွံ့ဖြိုးတိုးတက်လာစေခြင်း ပါဝင်သည်။ အုပ်စုလှုပ်ရှားမှုများ၊ ကစားခြင်းနှင့် ညွှန်ကြားချက်အတိုင်း ဆက်ဆံမှုမှတဆင့် ကလေးများသည် ဝေမျှခြင်းနှင့် ပူးပေါင်းလုပ်ဆောင်ခြင်းတို့ကို သင်ယူကြသည်။"
        }
        LgParagTex={[
          "ဆက်သွယ်ပြောဆိုခြင်း၊နားလည်မှုအဖွဲ့လိုက်လုပ်ဆောင်ခြင်းနှင့် တိုင်ပင်ဖြေရှင်းမှုကဲ့သို့သောကျွမ်းကျင်မှုများဖွံ့ဖြိုးတိုးတက်လာစေခြင်း ပါဝင်သည်။ ",
          "အုပ်စုလှုပ်ရှားမှုများ၊ ကစားခြင်းနှင့် ညွှန်ကြားချက်အတိုင်း ဆက်ဆံမှုမှတဆင့် ကလေးများသည် ဝေမျှခြင်းနှင့် ပူးပေါင်းလုပ်ဆောင်ခြင်းတို့ကို သင်ယူကြသည်။",
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
      <HightLightCourses VedioUrl={SocialDevelopmentPageVedio} />
    </div>
  );
};

export default SocialDevelopmentPage;
