import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";

import ButtonSolid from "../../../components/ButtonSolid/ButtonSolid.jsx";
import TypesWrapMainMenu from "../../../components/TypesWrap/TypesWrapMainMenu.jsx";
import WrapProductRoute from "../../../components/WrapProductRoute/WrapProductRoute.jsx";

const ThreeProSwiper = () => {
  return (
    <>
      <div className="lg:py-24 py-12 lg:text-center text-center relative bg-texture">
        <div className="lg:px-8 px-4">
          <h5
            className="type--eyebrow mt-0 mb-[30px] text-sm lg:text-base TradeGodthic-BoldCn uppercase tracking-wider"
            style={{ color: "#443828" }}
          >
            Get older. Own it. See stuff.
          </h5>
        </div>

        <div className="lg:px-8 px-4">
          <h2 className="type--section mt-0 mb-2.5 lg:mb-0 ITCGara text-6xl lg:text-[100px]">
            We’re a mission <br /> disguised as readers.
          </h2>
        </div>

        <div className="lg:px-8 px-4">
          <div
            className="block__copy relative mt-0 mb-0 lg:mb-4 lg:max-w-2xl  mx-auto lg:px-8"
            style={{ color: "#443828" }}
          >
            <p className="mt-4 text-base TradeGodthicCn tracking-wide">
              We’re here to call out the whole fountain of youth illusion,
              industries that profit from the fear of getting older and the
              concept of “aging gracefully.”
            </p>
          </div>
        </div>

        <section className="mt-10 lg:px-8">
          <div className="w-full mx-auto flex flex-col">
            <div className="w-full">
              <div className="w-full h-full relative">
                <Swiper
                  cssMode={true}
                  breakpoints={{
                    1: {
                      slidesPerView: 1.2,
                      spaceBetween: 9,
                      loop: true,
                      centeredSlides: true,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                      loop: true,
                      centeredSlides: false,
                    },
                  }}
                  // modules={[Autoplay, FreeMode]}
                  className="mySwiper text-white ITCGara"
                >
                  <SwiperSlide className="w-[200px]">
                    <WrapProductRoute idenPro={"6581c6751c8c057f1994b645"}>
                      <div className="sContain">
                        <div>
                          <img
                            srcSet="//cdn.shopify.com/s/files/1/2633/2144/files/bixby_green_hp.jpg?v=1668713189&amp;width=240 240w,//cdn.shopify.com/s/files/1/2633/2144/files/bixby_green_hp.jpg?v=1668713189&amp;width=480 480w,//cdn.shopify.com/s/files/1/2633/2144/files/bixby_green_hp.jpg?v=1668713189&amp;width=720 720w"
                            src="//cdn.shopify.com/s/files/1/2633/2144/files/bixby_green_hp.jpg?v=1668713189&amp;width=240 240w"
                            loading="lazy"
                            className="h-[660px] w-full object-cover"
                          />
                        </div>
                        <p className="slide__title absolute inset-x-0 bottom-0 mb-5 text-center font-heading leading-none text-[40px] lg:text-6xl hover-rise transition-all cubic duration-500">
                          Bixby
                        </p>
                      </div>
                      <p
                        className="TradeGodthic-BoldCn text-xs mt-2 tracking-wider"
                        style={{ color: "#443828" }}
                      >
                        MAXIE SHERFIELD - HEAD GROUNDSKEEPER, THE LONG TIME, TX
                      </p>
                    </WrapProductRoute>
                  </SwiperSlide>
                  <SwiperSlide className="w-[200px]">
                    <WrapProductRoute idenPro={"658072139cdbb6e15d444a94"}>
                      <div className="sContain">
                        <div>
                          <img
                            srcSet="//cdn.shopify.com/s/files/1/2633/2144/files/mabuhay_charcoal_hp.jpg?v=1668713207&amp;width=240 240w,//cdn.shopify.com/s/files/1/2633/2144/files/mabuhay_charcoal_hp.jpg?v=1668713207&amp;width=480 480w,//cdn.shopify.com/s/files/1/2633/2144/files/mabuhay_charcoal_hp.jpg?v=1668713207&amp;width=720 720w"
                            src="//cdn.shopify.com/s/files/1/2633/2144/files/mabuhay_charcoal_hp.jpg?v=1668713207&amp;width=240 240w"
                            loading="lazy"
                            className="h-[660px] w-full object-cover"
                          />
                        </div>
                        <p className="slide__title absolute inset-x-0 bottom-0 mb-5 text-center font-heading leading-none text-[40px] lg:text-6xl hover-rise transition-all cubic duration-500">
                          Mabuhay
                        </p>
                      </div>
                      <p
                        className="TradeGodthic-BoldCn text-xs mt-2 tracking-wider"
                        style={{ color: "#443828" }}
                      >
                        JESS CHEATHEM - CERAMICIST
                      </p>
                    </WrapProductRoute>
                  </SwiperSlide>
                  <SwiperSlide className="w-[200px]">
                    <WrapProductRoute idenPro={"6581c21b1c8c057f1994b55c"}>
                      <div className="sContain">
                        <div>
                          <img
                            srcSet="//cdn.shopify.com/s/files/1/2633/2144/files/miklos_blue_hp.jpg?v=1668713231&amp;width=240 240w,//cdn.shopify.com/s/files/1/2633/2144/files/miklos_blue_hp.jpg?v=1668713231&amp;width=480 480w,//cdn.shopify.com/s/files/1/2633/2144/files/miklos_blue_hp.jpg?v=1668713231&amp;width=720 720w"
                            src="//cdn.shopify.com/s/files/1/2633/2144/files/miklos_blue_hp.jpg?v=1668713231&amp;width=240 240w"
                            loading="lazy"
                            className="h-[660px] w-full object-cover"
                          />
                        </div>
                        <p className="slide__title absolute inset-x-0 bottom-0 mb-5 text-center font-heading leading-none text-[40px] lg:text-6xl hover-rise transition-all cubic duration-500">
                          Miklos
                        </p>
                      </div>
                      <p
                        className="TradeGodthic-BoldCn text-xs mt-2 tracking-wider"
                        style={{ color: "#443828" }}
                      >
                        KHALIL RAFTI - ENTREPRENEUR
                      </p>
                    </WrapProductRoute>
                  </SwiperSlide>

                  <SwiperSlide className="w-[200px]">
                    <WrapProductRoute idenPro={"6581c6751c8c057f1994b645"}>
                      <div className="sContain">
                        <div>
                          <img
                            srcSet="//cdn.shopify.com/s/files/1/2633/2144/files/bixby_green_hp.jpg?v=1668713189&amp;width=240 240w,//cdn.shopify.com/s/files/1/2633/2144/files/bixby_green_hp.jpg?v=1668713189&amp;width=480 480w,//cdn.shopify.com/s/files/1/2633/2144/files/bixby_green_hp.jpg?v=1668713189&amp;width=720 720w"
                            src="//cdn.shopify.com/s/files/1/2633/2144/files/bixby_green_hp.jpg?v=1668713189&amp;width=240 240w"
                            loading="lazy"
                            className="h-[660px] w-full object-cover"
                          />
                        </div>
                        <p className="slide__title absolute inset-x-0 bottom-0 mb-5 text-center font-heading leading-none text-[40px] lg:text-6xl hover-rise transition-all cubic duration-500">
                          Bixby
                        </p>
                      </div>
                      <p
                        className="TradeGodthic-BoldCn text-xs mt-2 tracking-wider"
                        style={{ color: "#443828" }}
                      >
                        MAXIE SHERFIELD - HEAD GROUNDSKEEPER, THE LONG TIME, TX
                      </p>
                    </WrapProductRoute>
                  </SwiperSlide>
                  <SwiperSlide className="w-[200px]">
                    <WrapProductRoute idenPro={"658072139cdbb6e15d444a94"}>
                      <div className="sContain">
                        <div>
                          <img
                            srcSet="//cdn.shopify.com/s/files/1/2633/2144/files/mabuhay_charcoal_hp.jpg?v=1668713207&amp;width=240 240w,//cdn.shopify.com/s/files/1/2633/2144/files/mabuhay_charcoal_hp.jpg?v=1668713207&amp;width=480 480w,//cdn.shopify.com/s/files/1/2633/2144/files/mabuhay_charcoal_hp.jpg?v=1668713207&amp;width=720 720w"
                            src="//cdn.shopify.com/s/files/1/2633/2144/files/mabuhay_charcoal_hp.jpg?v=1668713207&amp;width=240 240w"
                            loading="lazy"
                            className="h-[660px] w-full object-cover"
                          />
                        </div>
                        <p className="slide__title absolute inset-x-0 bottom-0 mb-5 text-center font-heading leading-none text-[40px] lg:text-6xl hover-rise transition-all cubic duration-500">
                          Mabuhay
                        </p>
                      </div>
                      <p
                        className="TradeGodthic-BoldCn text-xs mt-2 tracking-wider"
                        style={{ color: "#443828" }}
                      >
                        JESS CHEATHEM - CERAMICIST
                      </p>
                    </WrapProductRoute>
                  </SwiperSlide>
                  <SwiperSlide className="w-[200px]">
                    <WrapProductRoute idenPro={"6581c21b1c8c057f1994b55c"}>
                      <div className="sContain">
                        <div>
                          <img
                            srcSet="//cdn.shopify.com/s/files/1/2633/2144/files/miklos_blue_hp.jpg?v=1668713231&amp;width=240 240w,//cdn.shopify.com/s/files/1/2633/2144/files/miklos_blue_hp.jpg?v=1668713231&amp;width=480 480w,//cdn.shopify.com/s/files/1/2633/2144/files/miklos_blue_hp.jpg?v=1668713231&amp;width=720 720w"
                            src="//cdn.shopify.com/s/files/1/2633/2144/files/miklos_blue_hp.jpg?v=1668713231&amp;width=240 240w"
                            loading="lazy"
                            className="h-[660px] w-full object-cover"
                          />
                        </div>
                        <p className="slide__title absolute inset-x-0 bottom-0 mb-5 text-center font-heading leading-none text-[40px] lg:text-6xl hover-rise transition-all cubic duration-500">
                          Miklos
                        </p>
                      </div>
                      <p
                        className="TradeGodthic-BoldCn text-xs mt-2 tracking-wider"
                        style={{ color: "#443828" }}
                      >
                        KHALIL RAFTI - ENTREPRENEUR
                      </p>
                    </WrapProductRoute>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <div className="lg:px-8 px-4 ">
          <TypesWrapMainMenu customClass={"border-none"} name={"Readers "}>
            <ButtonSolid
              customClass={"text-lg uppercase mt-14"}
              child={"Shop all readers"}
            ></ButtonSolid>
          </TypesWrapMainMenu>
        </div>

        <WrapProductRoute
          idenPro={"658143f74cdf73b3929b9d15"}
        ></WrapProductRoute>
      </div>
    </>
  );
};

export default ThreeProSwiper;
