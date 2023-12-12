import SlideShow from "../../components/SlideShow/SlideShow.jsx";
import DynamicImgContain from "../../layout/Section/DynamicImgContain/DynamicImgContain";
import SwiperMenu from "../../layout/Section/SwiperMenu/SwiperMenu";

const HomePage = () => {
  return (
    <>
      <DynamicImgContain></DynamicImgContain>
      <SwiperMenu></SwiperMenu>
      <SlideShow></SlideShow>
    </>
  );
};

export default HomePage;
