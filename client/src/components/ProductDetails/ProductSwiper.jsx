/* eslint-disable quotes */
import { useState } from "react";
import {
  A11y,
  Navigation,
  Thumbs,
  Zoom,
  EffectFade,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/zoom";
const ProductSwiper = ({ image, imageHover, imageDetail }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        ' inline-block lg:!hidden !mx-2">' +
        "</span>"
      );
    },
  };
  return (
    <>
      <Swiper
        pagination={pagination}
        spaceBetween={10}
        a11y={{ enabled: true }}
        zoom={true}
        effect={"fade"}
        navigation={{
          nextEl: ".swiper-button-next-unique",
          prevEl: ".swiper-button-prev-unique",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[A11y, Zoom, Navigation, Thumbs, EffectFade, Pagination]}
        // breakpoints={{
        //   1: {
        //     pagination: {
        //       clickable: true,
        //     },
        //   },
        //   1024: {
        //     pagination: false,
        //   },
        // }}
        className="mainSwiper product-gallery product-gallery-slider cursor-pointer"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container" style={{ padding: "0 5%" }}>
            <div className="aspect-w-1 aspect-h-1 w-full relative bg-white">
              <img src={image} className="object-contain bg-white" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="aspect-w-1 aspect-h-1 w-full relative  bg-white">
              <img src={imageHover} className="object-contain bg-white" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-zoom-container"
            style={{
              padding: "0 5%",
              paddingBottom: "10%",
              background: "white",
            }}
          >
            <div className="aspect-w-1 aspect-h-1 w-full relative bg-white">
              <img src={imageDetail} className="object-contain bg-white" />
            </div>
          </div>
        </SwiperSlide>

        <button className="btn-control swiper-prev swiper-button-prev-unique top-1/2 -translate-y-1/2 absolute p-2 left-0 lg:left-0 h-10 text-dark transform z-10 transition-all user-select-none hidden opacity-0 group-hover:opacity-100 lg:block">
          <div className="sr-only">Previous slide</div>
        </button>
        <button className="btn-control swiper-next swiper-button-next-unique top-1/2 -translate-y-1/2 absolute p-2 right-0 lg:right-0 h-10 text-dark transform z-10 transition-all user-select-none hidden opacity-0 group-hover:opacity-100 lg:block">
          <div className="sr-only">Next slide</div>
        </button>
      </Swiper>
      <Swiper
        zoom={true}
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={3}
        modules={[Navigation, Thumbs]}
        className="thumbSwiper relative bottom-14 hidden lg:block"
      >
        <SwiperSlide>
          <button className="mx-2.5 lg:p-0.5 lg:border lg:border-transparent gallery-pagination-item lg:rounded-none rounded-full">
            <span className="lg:w-10 w-2 lg:h-10 h-2 lg:bg-white block">
              <img
                src={image}
                className="w-full h-full object-contain lg:block hidden"
              />
            </span>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="mx-2.5 lg:p-0.5 lg:border lg:border-transparent gallery-pagination-item lg:rounded-none rounded-full">
            <span className="lg:w-10 w-2 lg:h-10 h-2 lg:bg-white block">
              <img
                src={imageHover}
                className="w-full h-full object-contain lg:block hidden"
              />
            </span>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="mx-2.5 lg:p-0.5 lg:border lg:border-transparent gallery-pagination-item lg:rounded-none rounded-full">
            <span className="lg:w-10 w-2 lg:h-10 h-2 lg:bg-white block">
              <img
                src={imageDetail}
                className="w-full h-full object-contain lg:block hidden"
              />
            </span>
          </button>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductSwiper;
