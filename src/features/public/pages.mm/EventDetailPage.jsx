import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import kid from "../../../assets/events/event_kid.png";
import garaffe from "../../../assets/events/event_garaffee.png";
import breadCrumb3 from "../../../assets/breadcrumb/breadcrumb-3.png";
import Container from "../components/Container";
import playingInCompound from "../../../assets/homePage/playing_in_compound.png";
import hollowenKid from "../../../assets/events/hollowenChildren.png";
import sun from "../../../assets/events/sun.png";
import sunFlower from "../../../assets/events/sun_flower.png";
import sunAnimation from "../../../../src/features/public/lotties/sunAnimatin.json";
import footerBg from "../../../assets/homePage/bg_footer.jpg";
import Footer from "../components/Footer.mm";
import { TbChristmasTree } from "react-icons/tb";
import { GrCurrency } from "react-icons/gr";
import {
  LuClock2,
  LuGlobe,
  LuMail,
  LuMapPin,
  LuPhone,
  LuUserRound,
} from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import Lottie from "lottie-react";

const EventDetailPage = () => {
  return (
    <>
      <BreadCrumb
        bgImg={breadCrumb3}
        leftImg={kid}
        rightImg={garaffe}
        rImgWidth={69}
        lImgPos={"left-[15%] top-[-90%]"}
        flexFlow={"flex-col"}
        rImgPos={"-top-4 right-5"}
        lImgWidth={60}
        links={[{ title: " အစီအစဉ်များ", path: "/mm/upcoming-events" }]}
        title={"အစီအစဉ်များ"}
        currentPageTitle={"အသေးစိတ်"}
      />

      <Container className={" py-5 flex flex-col md:gap-28 gap-10 "}>
        {/* Title paragraph section */}
        <div className="md:max-w-[600px] mx-auto flex flex-col gap-4  items-center my-4">
          <p className="bg-lime-500  text-white px-8 py-1 text-sm   text-base  rounded-full">
            ဖွံ့ဖြိုးမှု
          </p>
          <h2 className="md:text-4xl flex items-center justify-center align-baseline text-2xl font-poppin font-bold leading-10">
            ခရစ္စမတ်ပွဲ <TbChristmasTree className=" text-lime-400" />
            <BsStars className=" text-yellow-300" />
          </h2>
          <p className="leading-8 text-center text-  text-neutral-700">
            ကစားပြိုင်ပွဲများ၊ သင်ကြားမှု လှုပ်ရှားမှုများနှင့် ဖန်တီးမှု
            အလုပ်ရုံဆွေးနွေးပွဲများပါဝင်သည့် စိတ်လှုပ်ရှားဖွယ်နေ့တစ်နေ့ကို
            ကျွန်ုပ်တို့နှင့်အတူ ပါဝင်လိုက်ပါ! 🎨✨ မိသားစုနှင့်အတူ
            အမှတ်တရများဖန်တီးရန် အခွင့်အရေးကို မလွှတ်တမ်းယူလိုက်ပါနဲ့
          </p>
          {/* Location Time icons  */}
          <div className="flex items-center md:gap-6 gap-2 text-nowrap ">
            <p className="flex md:gap-2 text-xs gap-1.5 justify-center items-center font-semibold">
              <div className="text-orange-500 flex items-center md:gap-2">
                <LuMapPin size={20} /> တည်နေရာ :
              </div>
              <p className="text-neutral-700">Sunshine Campus</p>
            </p>

            <p className="flex md:gap-2 gap-1.5 text-xs justify-center items-center font-semibold">
              <div className="text-orange-500 flex items-center gap-2">
                <LuClock2 size={20} /> အချိန် :
              </div>
              <p className="text-neutral-700 text-xs">9:00 AM - 11 AM</p>
            </p>
            <p className="text-orange-500  text-xs flex items-center justify-center gap-2 ">
              <GrCurrency size={20} className=" mt-1" />
              ဝင်ကြေးအခမဲ့
            </p>
          </div>
        </div>
        {/* image section  */}
        <div className="flex justify-between  items-center gap-4 px-8 mx-4   py-5 relative ">
          <Lottie
            className=" absolute  hidden xl:inline-block skew-x-6 skew-y-3 right-0 -top-20 w-40 "
            animationData={sunAnimation}
            loop
          />
          <img
            className="absolute  hidden xl:inline-block left-5 -bottom-20"
            src={sun}
          />

          <div
            className={
              "flex justify-center md:flex-row flex-col-reverse items-center gap-6 mx-auto   "
            }
          >
            <img
              className="md:w-[628px] xl:-translate-y-12 xl:translate-x-0 xl:border-0 md:border-8 border-orange-500 rounded-xl md:translate-x-[40%] md:-translate-y-12 md:right-0 md:left-0  justify-self-center  z-40"
              src={hollowenKid}
            />
            <img
              className="md:w-[628px] xl:translate-y-12 xl:translate-x-0  md:right-0 md:left-0   rounded-xl md:-translate-x-[40%] md:translate-y-28  "
              src={playingInCompound}
            />
          </div>
        </div>

        <div className="xl:columns-1  md:columns-2 md:inline-block hidden  justify-between gap-6  text-xl font-roboto leading-9 my-4">
          <p className="  text-xl font-roboto xl:leading-9  text-pretty break-keep   text-neutral-700   ">
            ကျွန်ုပ်တို့၏ ကျောင်းတွင် ကျင်းပသည့် ခရစ္စမတ်ပွဲ သည် ကျောင်းသားများ၊
            မိဘများ၊ နှင့် ဆရာများ အတူတကွ ပါဝင်ပျော်ရွှင်နိုင်သည့်
            နှစ်စဉ်ပွဲတော် ဖြစ်ပါသည်။ ပွဲတွင် ပါဝင်မည့် အစီအစဉ်များ ဂိမ်းများ၊
            ဂီတ နှင့် ဖန်တီးမှု အလုပ်ရုံဆွေးနွေးပွဲများ 🎶🎨 ပျော်ရွှင်ဖွယ်
            ခရစ္စမတ်အလှဆင်မှုများနှင့်သီချင်းများ 🎄🎵 Santa Claus အလည်လာမှု 🎅
            – ကျောင်းသားများကို ဝမ်းသာစရာလက်ဆောင်များပေးမည်! ပျော်ရွှင်မှုနှင့်
            မဂ္ဂင်အံ့ဖွယ် ဖြစ်စဉ်များကို ခံစားနိုင်မည့် အခွင့်အရေး!
            မိသားစုနှင့်အတူ အမှတ်တရများဖန်တီးလိုက်ကြပါ!
          </p>
        </div>
        <div className="  md:hidden  justify-between flex flex-col sm:columns-2 gap-6  text-xl font-roboto leading-9 ">
          <p>
            ကျွန်ုပ်တို့၏ ကျောင်းတွင် ကျင်းပသည့် ခရစ္စမတ်ပွဲ သည် ကျောင်းသားများ၊
            မိဘများ၊ နှင့် ဆရာများ အတူတကွ ပါဝင်ပျော်ရွှင်နိုင်သည့်
            နှစ်စဉ်ပွဲတော် ဖြစ်ပါသည်။ ပွဲတွင် ပါဝင်မည့် အစီအစဉ်များ ဂိမ်းများ၊
            ဂီတ နှင့် ဖန်တီးမှု အလုပ်ရုံဆွေးနွေးပွဲများ 🎶🎨 ပျော်ရွှင်ဖွယ်
            ခရစ္စမတ်အလှဆင်မှုများနှင့်သီချင်းများ 🎄🎵 Santa Claus အလည်လာမှု 🎅
          </p>
          <p>
            ကျောင်းသားများကို ဝမ်းသာစရာလက်ဆောင်များပေးမည်! ပျော်ရွှင်မှုနှင့်
            မဂ္ဂင်အံ့ဖွယ် ဖြစ်စဉ်များကို ခံစားနိုင်မည့် အခွင့်အရေး!
            မိသားစုနှင့်အတူ အမှတ်တရများဖန်တီးလိုက်ကြပါ!
          </p>
        </div>
        <div className=" flex md:flex-row items-start md:justify-center text-orange-500 flex-col gap-4 justify-start text-xs px-4">
          <p className=" flex justify-center  items-center gap-1.5   text-nowrap">
            <LuUserRound />
            ကျင်းပသူ၏နာမည် :
            <span className=" text-neutral-700">Sunshine Campus</span>
          </p>
          <p className=" flex justify-center  items-center gap-1.5   text-nowrap">
            <LuPhone />
            ဖုန်းနံပါတ် :<span className=" text-neutral-700">704-555-0127</span>
          </p>
          <p className=" flex justify-center  items-center gap-1.5   text-nowrap">
            <LuMail />
            အီးမေးလ် :
            <span className=" text-neutral-700">Tinyverse@gmail.com</span>
          </p>
          <p className=" flex justify-center  items-center gap-1.5   text-nowrap">
            <LuGlobe />
            ဝက်ဘ်ဆိုဒ် :<span className=" text-neutral-700">Tinyverse.net</span>
          </p>
        </div>
      </Container>
      <Footer bgImg={footerBg} color={"orange"} />
    </>
  );
};

export default EventDetailPage;
