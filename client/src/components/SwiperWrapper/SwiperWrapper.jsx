import "swiper/scss";

import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from "swiper/modules";
import "./cusSwip.scss";
import Article from "./Article.jsx";
// SwiperWrapper.jsx
const SwiperWrapper = ({ swiperContentData }) => {
  return (
    <>
      <Swiper
        breakpoints={{
          1: {
            slidesPerView: 1.5,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        loop={false}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {swiperContentData.map((content, index) => (
          <SwiperSlide key={index}>
            <Article swiperContent={content}></Article>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperWrapper;
