import BgImg from "../../../assets/gallery/bg.png";
import Footer from "../components/Footer";
import GalleryHeroSection from "../gallery/GalleryHeroSection";

const GalleryPage = () => {
  return (
    <main>
      <GalleryHeroSection />
      <Footer bgImg={BgImg} color={"fuchsia"} />
    </main>
  );
};

export default GalleryPage;
