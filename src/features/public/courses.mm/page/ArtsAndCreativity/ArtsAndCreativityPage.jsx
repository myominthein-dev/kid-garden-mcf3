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
    "ကိုယ်ကျင့်တရား ",
    "ဖန်တီးမှုစာပေ",
    "စာဖတ်ခြင်းနှင့် ဗဟုသုတ",
    "စာရေးသားစွမ်းရည်",
  ];
  return (
    <div className=" my-10 ">
      <ArtCreativity />
      <CategoriesDetail
        imgPeopleUrl={ArtsAndCreativityOne}
        flexFlow={"xl:flex-row-reverse"}
        DimaondGroupPositon={"md:top-1 md:right-[10%] top-0"}
        headerText={"အနုပညာနှင့်ဖန်တီးမှု"}
        ParagText={
          "ကလေးများ၏မိမိကိုယ်ကိုဖော်ပြနိုင်မှုစိတ်ကူးဉာဏ်ဖန်တီးနိုင်မှုနှင့်စိတ်လှုပ်ရှားမှုဖွံ့ဖြိုးတိုးတက်မှုကိုတိုးတက်စေရာအရေးကြီးသောအခန်းကဏ္ဍကိုမျှဝေပေးနိုင်သည်ပုံဆွဲခြင်းရောင်စုံဆေးခြယ်ခြင်းယာယီလုပ်ဆောင်ခြင်းတေးဂီတနှင့်ခန္ဓာကိုယ်လှုပ်ရှားမှုများကနေတစ်ဆင့်ကလေးများသည်မိမိ၏ထူးခြားသည့်အတွေးအမြင်များနှင့် ခံစားမှုများကို ထွက်ဖော်လေ့လာနိုင်သည်။ "
        }
        LgParagTex={[
          "ကလေးများ၏မိမိကိုယ်ကိုဖော်ပြနိုင်မှုစိတ်ကူးဉာဏ်ဖန်တီးနိုင်မှုနှင့်စိတ်လှုပ်ရှားမှုဖွံ့ဖြိုးတိုးတက်မှုကိုတိုးတက်စေရာအရေးကြီးသောအခန်းကဏ္ဍကိုမျှဝေပေးနိုင်သည်ပုံဆွဲခြင်းရောင်စုံဆေးခြယ်ခြင်းယာယီလုပ်ဆောင်ခြင်းတေးဂီတနှင့်ခန္ဓာကိုယ်လှုပ်ရှားမှုများကနေတစ်ဆင့်ကလေးများသည်မိမိ၏ထူးခြားသည့်အတွေးအမြင်များနှင့် ခံစားမှုများကို ထွက်ဖော်လေ့လာနိုင်သည်။ ",
        ]}
      />
      {/* What Your Kid Will Learn */}
      <WhatYourKidWillLearn
        flexFlow={"flex-row-reverse"}
        text={
          "သင်တန်းအမျိုးအစားများ သည် သင်တန်းများကို ဘာသာရပ်၊ ရည်ရွယ်ချက်နှင့် လေ့လာမှုပုံစံအလိုက် ခွဲခြားထားခြင်းဖြစ်သည်။ ဥပမာ - ပညာရေး၊ အလုပ်အကိုင်၊ နည်းပညာ၊ ဘာသာစကားစသည့် အမျိုးအစားများ ပါဝင်သည်။"
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
