import HomeHeroSection from "../home-components.mm/HomeHeroSection";
import footerBg from "../../../assets/homePage/bg_footer.jpg";
import Footer from "../components/Footer.mm";
import HomeCaterogires from "../home-components.mm/HomeCaterogires";
import HomeProcess from "../home-components.mm/HomeProcess";
import EventCalendar from "../home-components.mm/EventCalendar";
import CalendarCard from "../home-components.mm/CalendarCard";
import HomeGallery from "../home-components.mm/HomeGallery";

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeCaterogires />
      <HomeProcess />
      <EventCalendar />
      <HomeGallery />
      <Footer bgImg={footerBg} color={"orange"} />
    </>
  );
};

export default HomePage;
