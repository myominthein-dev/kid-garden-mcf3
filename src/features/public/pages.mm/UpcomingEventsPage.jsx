import Container from "../components/Container";
import footerBg from "../../../assets/homePage/bg_footer.jpg";
import writingInFense from "../../../assets/homePage/writing_in_fense.png";
import groupingInClas from "../../../assets/homePage/grouping_in_class.png";
import playingInCompound from "../../../assets/homePage/playing_in_compound.png";
import bgImage from "../../../assets/homePage/homeHeroBg.png";
import CalendarCard from "../home-components.mm/CalendarCard";
import ropeRace from "../../../assets/homePage/rope_race.png";
import groupRanning from "../../../assets/homePage/kid_group_ranning.png";
import makingCircle from "../../../assets/homePage/kids_making_circle.png";
import playingFootball from "../../../assets/homePage/kid_playing_football.png";
import spider from "../../../assets/homePage/spider_with_kids.png";
import hollowenKid from "../../../assets/homePage/kid_with_hollowen.png";
import Footer from "../components/Footer.mm";
import greenSq from "../../../assets/events/small_green.png";
import orangeSq from "../../../assets/events/bigger_orange.png";
import roseSq from "../../../assets/events/big_rose.png";
import cloud from "../../../assets/events/orange_cloud.png";
import DetailBtn from "../home-components.mm/DetailBtn";
import BreadCrumb from "../components/BreadCrumb";
import breadCrumb3 from "../../../assets/breadcrumb/breadcrumb-3.png";
import emotions from "../../../assets/breadcrumb/emotions.png";
import EmotionsRight from "../../../assets/breadcrumb/EmotionsRight.png";
const events = [
  writingInFense,
  groupingInClas,
  ropeRace,
  playingInCompound,
  groupRanning,
  makingCircle,
  playingFootball,
  spider,
  hollowenKid,
];
const UpcomingEventsPage = () => {
  return (
    <>
      <BreadCrumb
        lImgWidth={200}
        bgImg={breadCrumb3}
        leftImg={emotions}
        leftImgShow={false}
        lImgPos={"left-[15%] top-[-90%]"}
        flexFlow={"flex-col"}
        rightImg={EmotionsRight}
        title={"Events"}
        currentPageTitle={"Events"}
      />
      <Container className={"relative"}>
        <img
          className="absolute xl:inline-block md:hidden xl:right-5  -top-4 right-16"
          src={cloud}
        />
        <div className="relative md:mx-auto flex md:justify-center md:items-center  gap-4 flex-col md:w-[618px]">
          <div className="w-20 h-20 xl:inline-block hidden absolute -top-5 -left-5">
            <img className="absolute right-0 bottom-0" src={greenSq} />
            <img
              className="absolute left-0 top-0 bottom-0 my-auto"
              src={orangeSq}
            />
            <img className="absolute top-0 right-0" src={roseSq} />
          </div>
          <h3 className=" text-orange-500 leading-9 font-normal text-xl  font-pacifico">
            Upcoming Events
          </h3>

          <h1 className=" xl:text-center leading-9 xl:text-4xl text-2xl font-poppin font-semibold text-neutral-900">
            Calendar Of School Event
          </h1>
          <p className="md:text-lg text-base font-roboto md:text-center  text-neutral-700">
            We have 9 amazing events planned for this year, filled with fun,
            learning, and community activities for students and families. Stay
            tuned and join us to create wonderful memories together!"
          </p>
        </div>

        {/* Card loop  */}
        <div className="my-10 xl:grid xl:grid-cols-3 justify-between items-center hidden gap-4">
          {events.map((e, i) => (
            <CalendarCard key={i} imgUrl={e} id={i} />
          ))}
        </div>
        <div className="my-10 md:grid xl:hidden hidden justify-between items-center md:grid-cols-2 gap-4">
          {events.slice(0, 6).map((e, i) => (
            <CalendarCard key={i} imgUrl={e} id={i} />
          ))}
        </div>
        <div className="my-10 md:hidden  grid justify-center  justify-items-center  items-center grid-cols-1 gap-4">
          {events.slice(0, 3).map((e, i) => (
            <CalendarCard key={i} imgUrl={e} id={i} />
          ))}
        </div>
        <DetailBtn
          className={" inline-block md:hidden"}
          content={"View all events"}
        />
        <h3 className="  hidden md:grid text-orange-500 text-center py-5 my-5 font-normal text-xl  font-pacifico">
          Stay Tune For Next Academic Year
        </h3>
      </Container>
      <Footer bgImg={footerBg} color={"orange"} />
    </>
  );
};

export default UpcomingEventsPage;
