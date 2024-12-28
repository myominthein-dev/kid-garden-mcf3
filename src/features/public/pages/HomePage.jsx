import HomeHeroSection from "../home-components/HomeHeroSection";
import footerBg from "../../../assets/homePage/bg_footer.jpg";
import Footer from "../components/Footer";
import HomeCaterogires from "../home-components/HomeCaterogires";
import HomeProcess from "../home-components/HomeProcess";
const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeCaterogires />
      <HomeProcess />

      <Footer bgImg={footerBg} newsLetterBgColor={"orange"} />
    </>
  );
};

export default HomePage;
