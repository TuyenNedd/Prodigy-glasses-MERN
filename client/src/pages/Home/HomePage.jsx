import AwwMenu from "../../components/AwwMenu/AwwMenu.jsx";
// import Header from "../../components/Header/Header.jsx";

import Marquee from "../../components/Marquee/Marquee.jsx";
import Block from "../../components/block.jsx";
import DynamicImgContain from "../../layout/Section/DynamicImgContain/DynamicImgContain.jsx";
import SwiperMenu from "../../layout/Section/SwiperMenu/SwiperMenu.jsx";

const HomePage = () => {
  return (
    <>
      <Marquee></Marquee>
      {/* <Headers></Headers> */}
      <AwwMenu></AwwMenu>
      <DynamicImgContain></DynamicImgContain>
      <SwiperMenu></SwiperMenu>
      <Block></Block>
    </>
  );
};

export default HomePage;
