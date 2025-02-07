import Container from "../components/Container";
import SeeMoreBtn from "./components/SeeMoreBtn";
import TopTitle from "./components/TopTitle";
import PhotoSection from "./PhotoSection";

const GalleryHeroSection = () => {
  return (
    <Container>
      <div className=" flex flex-col md:gap-12 gap-8 xl:gap-28">
        <TopTitle />
        <PhotoSection />
        <SeeMoreBtn />
      </div>
    </Container>
  );
};

export default GalleryHeroSection;
