import BgImg from "../../../assets/gallery/bg.png";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer.mm";
import GalleryHeroSection from "../gallery/GalleryHeroSection";

import breadCrumb2 from "../../../assets/breadcrumb/breadcrumb-2.jpg";
import woof from "../../../assets/breadcrumb/woof.png";
import youngBoy from "../../../assets/breadcrumb/young-boy.png";

const GalleryPage = () => {
  return (
    <main>
      <BreadCrumb
        leftImgShow={false}
        flexFlow={"flex-col"}
        bgImg={breadCrumb2}
        leftImg={woof}
        lImgWidth={300}
        rightImg={youngBoy}
        title={"ဓာတ်ပုံများ"}
        currentPageTitle={"ဓာတ်ပုံများ"}
      />
      <GalleryHeroSection />
      <Footer bgImg={BgImg} color={"fuchsia"} />
    </main>
  );
};

export default GalleryPage;
