import HomeHeroSection from "../home-components/HomeHeroSection";
import footerBg from "../../../assets/homePage/bg_footer.jpg";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <Footer bgImg={footerBg} newsLetterBgColor={"orange"} />
    </>
  );
};

export default HomePage;
