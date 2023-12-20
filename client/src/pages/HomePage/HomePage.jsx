import { useSelector } from "react-redux";
import SlideShow from "../../components/SlideShow/SlideShow.jsx";
import DynamicImgContain from "../../layout/Section/DynamicImgContain/DynamicImgContain";
import SwiperMenu from "../../layout/Section/SwiperMenu/SwiperMenu";

const HomePage = () => {
  const isAdmin = useSelector(state =>  state.user.isAdmin)
  const isAdminLocal =localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
  return (
    <>
      <DynamicImgContain></DynamicImgContain>
      <SwiperMenu></SwiperMenu>
      <SlideShow></SlideShow>
    </>
  );
};

export default HomePage;
