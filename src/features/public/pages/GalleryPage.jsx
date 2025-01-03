import BgImg from "../../../assets/gallery/bg.png";
import Footer from "../components/Footer";
import GalleryHeroSection from "../gallery/GalleryHeroSection";

const GalleryPage = () => {
  return (
    <main>
      <GalleryHeroSection />
      <Footer bgImg={BgImg} className={"bg-fuchsia-500"} />
    </main>
  );
};

export default GalleryPage;
