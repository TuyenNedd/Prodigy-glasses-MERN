import SwiperWrapper from "../../../components/SwiperWrapper/SwiperWrapper.jsx";
import { swiperContentData } from "./swiperContentData.js";

const SwiperMenu = () => {
  return (
    <>
      <SwiperWrapper swiperContentData={swiperContentData}></SwiperWrapper>
    </>
  );
};

export default SwiperMenu;
