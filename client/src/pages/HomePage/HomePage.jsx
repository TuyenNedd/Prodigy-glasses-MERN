import { useSelector } from "react-redux";
import SlideShow from "../../components/SlideShow/SlideShow.jsx";
import DynamicImgContain from "../../layout/Section/DynamicImgContain/DynamicImgContain";
import Explore from "../../layout/Section/Explore/Explore.jsx";
import SwiperMenu from "../../layout/Section/SwiperMenu/SwiperMenu";
import ThreeProSwiper from "../../layout/Section/ThreeProSwiper/ThreeProSwiper.jsx";
import TwoProSwiper from "../../layout/Section/TwoProSwiper/TwoProSwiper.jsx";

const HomePage = () => {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const isAdminLocal = localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
  return (
    <>
      <DynamicImgContain></DynamicImgContain>
      <SwiperMenu></SwiperMenu>
      <ThreeProSwiper></ThreeProSwiper>
      <Explore></Explore>
      <TwoProSwiper></TwoProSwiper>
      <SlideShow customClass={"!mt-0 lg:!mt-0"}></SlideShow>
    </>
  );
};

export default HomePage;
