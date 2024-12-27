import HomeHeroSection from "../home-components/HomeHeroSection";
import footerBg from "../../../assets/homePage/bg_footer.jpg";
import Footer from "../components/Footer";
import HomeCaterogires from "../home-components/HomeCaterogires";
const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeCaterogires />
      <Footer bgImg={footerBg} newsLetterBgColor={"orange"} />
    </>
  );
};

export default HomePage;
