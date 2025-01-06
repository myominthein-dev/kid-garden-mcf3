import BgImg from "../../../assets/gallery/bg.png";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import GalleryHeroSection from "../gallery/GalleryHeroSection";

import breadCrumb2 from "../../../assets/breadcrumb/breadcrumb-2.jpg";
import woof from "../../../assets/breadcrumb/woof.png";
import youngBoy from "../../../assets/breadcrumb/young-boy.png";

const GalleryPage = () => {
  return (
    <main>
      <BreadCrumb
        bgImg={breadCrumb2}
        leftImg={woof}
        lImgWidth={300}
        rightImg={youngBoy}
        title={"Gallery"}
        currentPageTitle={"Gallery"}
      />
      <GalleryHeroSection />
      <Footer bgImg={BgImg} color={"fuchsia"} />
    </main>
  );
};

export default GalleryPage;
