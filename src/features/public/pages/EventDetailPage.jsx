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
import footerBg from "../../../assets/homePage/bg_footer.jpg";
import Footer from "../components/Footer";
import sunAnimation from "../../../../src/features/public/lotties/sunAnimatin.json";
import {
  LuClock2,
  LuGlobe,
  LuMail,
  LuMapPin,
  LuPhone,
  LuUserRound,
} from "react-icons/lu";
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
        links={[{ title: " Events", path: "/upcoming-events" }]}
        title={"Event Details"}
        currentPageTitle={"Event Details"}
      />

      <Container className={" py-5 flex w-full flex-col md:gap-28 gap-10 "}>
        {/* Title paragraph section */}
        <div className="md:max-w-[600px] w-full  mx-auto flex flex-col gap-4  items-center my-4">
          <p className="bg-lime-500 text-white px-2.5 py-0.5   text-base  rounded-full">
            Development
          </p>
          <h2 className="md:text-4xl text-2xl font-poppin font-bold leading-10">
            Christmas Party
          </h2>
          <p className="leading-8 text-center text-base text-neutral-700">
            Celebrate the festive season with fun activities, cheerful music,
            and holiday treats at our school's Christmas party. Let’s create
            magical moments together!
          </p>
          {/* Location Time icons  */}
          <div className="flex sm:w-full w-80 px-4 text-xs justify-center items-center md:gap-6 gap-2 text-nowrap ">
            <p className="flex md:gap-2 text-xs gap-1 justify-center items-center md:font-semibold">
              <div className="text-orange-500 flex items-center md:gap-2">
                <LuMapPin size={20} /> Location :
              </div>
              <p className="text-neutral-700">Sunshine Campus</p>
            </p>

            <p className="flex md:gap-2 gap-1 text-xs justify-center items-center md:font-semibold">
              <div className="text-orange-500 flex items-center gap-2">
                <LuClock2 size={20} /> Time :
              </div>
              <p className="text-neutral-700 text-xs">9:00 AM - 11 AM</p>
            </p>
            <p className="text-orange-500 ">$ Free</p>
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
            The Christmas Party at our school is a joyful annual tradition that
            brings together students, parents, and teachers for a festive
            celebration. This special event creates an opportunity for everyone
            to connect and strengthen the sense of community within the school.
            The day is filled with fun activities, including games, music, and
            creative holiday crafts that bring out the festive spirit in
            children. A highlight of the celebration is the visit from Santa
            Claus, who spreads joy and hands out small surprises to the
            students. Beautiful Christmas decorations and cheerful carols create
            a warm and magical atmosphere throughout the campus.
          </p>
        </div>
        <div className="  md:hidden  justify-between flex flex-col sm:columns-2 gap-6  text-xl font-roboto leading-9 ">
          <p>
            The Christmas Party at our school is a joyful annual tradition that
            brings together students, parents, and teachers for a festive
            celebration. This special event creates an opportunity for everyone
            to connect and strengthen the sense of community within the school.
            The day is filled with fun activities, including games, music, and
            creative holiday crafts that bring out the festive spirit in
            children. A highlight of the celebration is the visit from Santa
            Claus, who spreads joy and hands out small surprises to the
            students. Beautiful Christmas decorations and cheerful carols create
            a warm and magical atmosphere throughout the campus.{" "}
          </p>
          <p>
            Students can showcase their talents through performances, such as
            singing, dancing, or acting in holiday-themed plays. Delicious
            seasonal treats and refreshments are served to add to the festive
            delight. The event aims to foster joy, unity, and togetherness while
            making cherished memories for families. It’s also an opportunity for
            children to learn the values of kindness, sharing, and gratitude
            during this special time of year. The Christmas Party truly marks a
            magical and unforgettable moment for our entire school community.
          </p>
        </div>
        <div className=" flex md:flex-row items-start md:justify-center text-orange-500 flex-col gap-4 justify-start text-xs px-4">
          <p className=" flex justify-center  items-center gap-1.5   text-nowrap">
            <LuUserRound />
            Organizer Name:{" "}
            <span className=" text-neutral-700">Sunshine Campus</span>
          </p>
          <p className=" flex justify-center  items-center gap-1.5   text-nowrap">
            <LuPhone />
            Phone: <span className=" text-neutral-700">704-555-0127</span>
          </p>
          <p className=" flex justify-center  items-center gap-1.5   text-nowrap">
            <LuMail />
            Email:{" "}
            <span className=" text-neutral-700">Tinyverse@gmail.com</span>
          </p>
          <p className=" flex justify-center  items-center gap-1.5   text-nowrap">
            <LuGlobe />
            Website: <span className=" text-neutral-700">Tinyverse.net</span>
          </p>
        </div>
      </Container>
      <Footer bgImg={footerBg} color={"orange"} />
    </>
  );
};

export default EventDetailPage;
