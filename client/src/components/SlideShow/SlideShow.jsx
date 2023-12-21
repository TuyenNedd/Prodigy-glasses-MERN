// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";

const SlideShow = ({ customClass }) => {
  return (
    <>
      <section
        className={`block section-slideshow section-slideshow-multiple lg:mt-4 lg:mb-2 mt-4 mb-2 lg:px-0 px-0 lg:py-0 py-0 ${customClass}`}
      >
        <div className="w-full mx-auto flex flex-col">
          <div className="w-full">
            <div className="w-full h-full relative">
              <Swiper
                slidesPerView={"auto"}
                loop={true}
                speed={7000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  //   reverseDirection: true,
                  // waitForTransition: false,
                }}
                breakpoints={{
                  1: {
                    freeMode: true,
                    spaceBetween: 10,
                  },
                  1024: {
                    freeMode: true,
                    spaceBetween: 10,
                  },
                }}
                modules={[Autoplay, FreeMode]}
                className="mySwiper"
              >
                <SwiperSlide className=" relative lg:py-0 w-auto lg:h-[600px] h-80">
                  <a className="block h-full relative group w-auto">
                    <div className="block__image_wrap h-full lg:py-0 lg:px-0 py-0 px-0 w-auto">
                      <div className="image_slider relative   h-full">
                        <img
                          srcSet="//caddislife.com/cdn/shop/files/Bixby_Black-Tort_Mishka_Studio_0212_1200_web.jpg?v=1673306043&amp;width=180 180w,//caddislife.com/cdn/shop/files/Bixby_Black-Tort_Mishka_Studio_0212_1200_web.jpg?v=1673306043&amp;width=360 360w,//caddislife.com/cdn/shop/files/Bixby_Black-Tort_Mishka_Studio_0212_1200_web.jpg?v=1673306043&amp;width=720 720w"
                          src="//caddislife.com/cdn/shop/files/Bixby_Black-Tort_Mishka_Studio_0212_1200_web.jpg?v=1673306043&amp;width=180 180w"
                          loading="lazy"
                          width="720"
                          height="540"
                          className="relative block max-h-full max-w-screen-lg h-full w-auto "
                        />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className=" relative lg:py-0 w-auto lg:h-[600px] h-80">
                  <a className="block h-full relative group w-auto">
                    <div className="block__image_wrap h-full lg:py-0 lg:px-0 py-0 px-0 w-auto">
                      <div className="image_slider relative   h-full">
                        <img
                          srcSet="//caddislife.com/cdn/shop/files/20200107_barkerfoto_9089_1200_web.jpg?v=1673306043&amp;width=180 180w,//caddislife.com/cdn/shop/files/20200107_barkerfoto_9089_1200_web.jpg?v=1673306043&amp;width=360 360w,//caddislife.com/cdn/shop/files/20200107_barkerfoto_9089_1200_web.jpg?v=1673306043&amp;width=720 720w"
                          src="//caddislife.com/cdn/shop/files/20200107_barkerfoto_9089_1200_web.jpg?v=1673306043&amp;width=180 180w"
                          loading="lazy"
                          width="720"
                          height="540"
                          className="relative block max-h-full max-w-screen-lg h-full w-auto "
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className=" relative lg:py-0 w-auto lg:h-[600px] h-80">
                  <a className="block h-full relative group w-auto">
                    <div className="block__image_wrap h-full lg:py-0 lg:px-0 py-0 px-0 w-auto">
                      <div className="image_slider relative   h-full">
                        <img
                          srcSet="//caddislife.com/cdn/shop/files/Bixby_Heritage-Green_Sandlot_0225_1200_web.jpg?v=1673306043&amp;width=180 180w,//caddislife.com/cdn/shop/files/Bixby_Heritage-Green_Sandlot_0225_1200_web.jpg?v=1673306043&amp;width=360 360w,//caddislife.com/cdn/shop/files/Bixby_Heritage-Green_Sandlot_0225_1200_web.jpg?v=1673306043&amp;width=720 720w,//caddislife.com/cdn/shop/files/Bixby_Heritage-Green_Sandlot_0225_1200_web.jpg?v=1673306043&amp;width=1080 1080w,//caddislife.com/cdn/shop/files/Bixby_Heritage-Green_Sandlot_0225_1200_web.jpg?v=1673306043&amp;width=1200 1200w,//caddislife.com/cdn/shop/files/Bixby_Heritage-Green_Sandlot_0225_1200_web.jpg?v=1673306043&amp;width=1500 1500w"
                          src="//caddislife.com/cdn/shop/files/Bixby_Heritage-Green_Sandlot_0225_1200_web.jpg?v=1673306043&amp;width=180 180w"
                          loading="lazy"
                          width="720"
                          height="540"
                          className="relative block max-h-full max-w-screen-lg h-full w-auto "
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className=" relative lg:py-0 w-auto lg:h-[600px] h-80">
                  <a className="block h-full relative group w-auto">
                    <div className="block__image_wrap h-full lg:py-0 lg:px-0 py-0 px-0 w-auto">
                      <div className="image_slider relative   h-full">
                        <img
                          srcSet="//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0042_1200_web.jpg?v=1673306043&amp;width=180 180w,//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0042_1200_web.jpg?v=1673306043&amp;width=360 360w,//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0042_1200_web.jpg?v=1673306043&amp;width=720 720w"
                          src="//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0042_1200_web.jpg?v=1673306043&amp;width=180 180w"
                          loading="lazy"
                          width="720"
                          height="540"
                          className="relative block max-h-full max-w-screen-lg h-full w-auto "
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className=" relative lg:py-0 w-auto lg:h-[600px] h-80">
                  <a className="block h-full relative group w-auto">
                    <div className="block__image_wrap h-full lg:py-0 lg:px-0 py-0 px-0 w-auto">
                      <div className="image_slider relative   h-full">
                        <img
                          srcSet="//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0109_1200_web.jpg?v=1673306043&amp;width=180 180w,//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0109_1200_web.jpg?v=1673306043&amp;width=360 360w,//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0109_1200_web.jpg?v=1673306043&amp;width=720 720w,//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0109_1200_web.jpg?v=1673306043&amp;width=1080 1080w,//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0109_1200_web.jpg?v=1673306043&amp;width=1200 1200w,//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0109_1200_web.jpg?v=1673306043&amp;width=1500 1500w"
                          src="//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0109_1200_web.jpg?v=1673306043&amp;width=180 180w"
                          loading="lazy"
                          width="720"
                          height="540"
                          className="relative block max-h-full max-w-screen-lg h-full w-auto "
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className=" relative lg:py-0 w-auto lg:h-[600px] h-80">
                  <a className="block h-full relative group w-auto">
                    <div className="block__image_wrap h-full lg:py-0 lg:px-0 py-0 px-0 w-auto">
                      <div className="image_slider relative   h-full">
                        <img
                          srcSet="//caddislife.com/cdn/shop/files/Bixby_Black-Tort_Mishka_Studio_0212_1200_web.jpg?v=1673306043&amp;width=180 180w,//caddislife.com/cdn/shop/files/Bixby_Black-Tort_Mishka_Studio_0212_1200_web.jpg?v=1673306043&amp;width=360 360w,//caddislife.com/cdn/shop/files/Bixby_Black-Tort_Mishka_Studio_0212_1200_web.jpg?v=1673306043&amp;width=720 720w"
                          src="//caddislife.com/cdn/shop/files/Bixby_Black-Tort_Mishka_Studio_0212_1200_web.jpg?v=1673306043&amp;width=180 180w"
                          loading="lazy"
                          width="720"
                          height="540"
                          className="relative block max-h-full max-w-screen-lg h-full w-auto "
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className=" relative lg:py-0 w-auto lg:h-[600px] h-80">
                  <a className="block h-full relative group w-auto">
                    <div className="block__image_wrap h-full lg:py-0 lg:px-0 py-0 px-0 w-auto">
                      <div className="image_slider relative   h-full">
                        <img
                          srcSet="//caddislife.com/cdn/shop/files/20200107_barkerfoto_9089_1200_web.jpg?v=1673306043&amp;width=180 180w,//caddislife.com/cdn/shop/files/20200107_barkerfoto_9089_1200_web.jpg?v=1673306043&amp;width=360 360w,//caddislife.com/cdn/shop/files/20200107_barkerfoto_9089_1200_web.jpg?v=1673306043&amp;width=720 720w"
                          src="//caddislife.com/cdn/shop/files/20200107_barkerfoto_9089_1200_web.jpg?v=1673306043&amp;width=180 180w"
                          loading="lazy"
                          width="720"
                          height="540"
                          className="relative block max-h-full max-w-screen-lg h-full w-auto "
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className=" relative lg:py-0 w-auto lg:h-[600px] h-80">
                  <a className="block h-full relative group w-auto">
                    <div className="block__image_wrap h-full lg:py-0 lg:px-0 py-0 px-0 w-auto">
                      <div className="image_slider relative   h-full">
                        <img
                          srcSet="//caddislife.com/cdn/shop/files/Bixby_Heritage-Green_Sandlot_0225_1200_web.jpg?v=1673306043&amp;width=180 180w,//caddislife.com/cdn/shop/files/Bixby_Heritage-Green_Sandlot_0225_1200_web.jpg?v=1673306043&amp;width=360 360w,//caddislife.com/cdn/shop/files/Bixby_Heritage-Green_Sandlot_0225_1200_web.jpg?v=1673306043&amp;width=720 720w,//caddislife.com/cdn/shop/files/Bixby_Heritage-Green_Sandlot_0225_1200_web.jpg?v=1673306043&amp;width=1080 1080w,//caddislife.com/cdn/shop/files/Bixby_Heritage-Green_Sandlot_0225_1200_web.jpg?v=1673306043&amp;width=1200 1200w,//caddislife.com/cdn/shop/files/Bixby_Heritage-Green_Sandlot_0225_1200_web.jpg?v=1673306043&amp;width=1500 1500w"
                          src="//caddislife.com/cdn/shop/files/Bixby_Heritage-Green_Sandlot_0225_1200_web.jpg?v=1673306043&amp;width=180 180w"
                          loading="lazy"
                          width="720"
                          height="540"
                          className="relative block max-h-full max-w-screen-lg h-full w-auto "
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className=" relative lg:py-0 w-auto lg:h-[600px] h-80">
                  <a className="block h-full relative group w-auto">
                    <div className="block__image_wrap h-full lg:py-0 lg:px-0 py-0 px-0 w-auto">
                      <div className="image_slider relative   h-full">
                        <img
                          srcSet="//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0042_1200_web.jpg?v=1673306043&amp;width=180 180w,//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0042_1200_web.jpg?v=1673306043&amp;width=360 360w,//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0042_1200_web.jpg?v=1673306043&amp;width=720 720w"
                          src="//caddislife.com/cdn/shop/files/12_BIXBY_MINOR_BLUE_0042_1200_web.jpg?v=1673306043&amp;width=180 180w"
                          loading="lazy"
                          width="720"
                          height="540"
                          className="relative block max-h-full max-w-screen-lg h-full w-auto "
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SlideShow;
