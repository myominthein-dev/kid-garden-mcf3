import HomeHeroSection from "../home-components/HomeHeroSection";
import footerBg from "../../../assets/homePage/bg_footer.jpg";
import Footer from "../components/Footer";
import HomeCaterogires from "../home-components/HomeCaterogires";
import HomeProcess from "../home-components/HomeProcess";
import EventCalendar from "../home-components/EventCalendar";
import CalendarCard from "../home-components/CalendarCard";
const HomePage = () => {
  return (
    <>
      <HomeHeroSection />

      <HomeCaterogires />
      <HomeProcess />
      <EventCalendar />
      <Footer bgImg={footerBg} color={"orange"} />
    </>
  );
};

export default HomePage;
