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
      <div className="container lg:py-24 py-12 lg:text-center text-center relative bg-texture">
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

      {/* <section class="relative lg:p-8 p-4">
  
  <img srcset="//cdn.shopify.com/s/files/1/2633/2144/files/hp-bixby-bg-pattern-desktop.jpg?v=1692830651&amp;width=180 180w,//cdn.shopify.com/s/files/1/2633/2144/files/hp-bixby-bg-pattern-desktop.jpg?v=1692830651&amp;width=360 360w,//cdn.shopify.com/s/files/1/2633/2144/files/hp-bixby-bg-pattern-desktop.jpg?v=1692830651&amp;width=720 720w,//cdn.shopify.com/s/files/1/2633/2144/files/hp-bixby-bg-pattern-desktop.jpg?v=1692830651&amp;width=1080 1080w,//cdn.shopify.com/s/files/1/2633/2144/files/hp-bixby-bg-pattern-desktop.jpg?v=1692830651&amp;width=1200 1200w,//cdn.shopify.com/s/files/1/2633/2144/files/hp-bixby-bg-pattern-desktop.jpg?v=1692830651&amp;width=1500 1500w,//cdn.shopify.com/s/files/1/2633/2144/files/hp-bixby-bg-pattern-desktop.jpg?v=1692830651&amp;width=2400 2400w,//cdn.shopify.com/s/files/1/2633/2144/files/hp-bixby-bg-pattern-desktop.jpg?v=1692830651&amp;width=2800 2800w" x-sizes="(min-width: 640px) 180px, 180px" src="//cdn.shopify.com/s/files/1/2633/2144/files/hp-bixby-bg-pattern-desktop.jpg?v=1692830651&amp;width=180 180w" loading="lazy" width="720" height="540" class="absolute top-0 left-0 h-full w-full object-cover lg:block hidden " alt=""/>
  <img srcset="//cdn.shopify.com/s/files/1/2633/2144/files/hp-bixby-bg-pattern-mobile.jpg?v=1692830650&amp;width=180 180w,//cdn.shopify.com/s/files/1/2633/2144/files/hp-bixby-bg-pattern-mobile.jpg?v=1692830650&amp;width=360 360w,//cdn.shopify.com/s/files/1/2633/2144/files/hp-bixby-bg-pattern-mobile.jpg?v=1692830650&amp;width=720 720w" x-sizes="(min-width: 640px) 180px, 180px" src="//cdn.shopify.com/s/files/1/2633/2144/files/hp-bixby-bg-pattern-mobile.jpg?v=1692830650&amp;width=180 180w" loading="lazy" width="720" height="540" class="absolute top-0 left-0 h-full w-full object-cover lg:hidden block " alt=""/>
  <div class="section-template--16288645841084__656981e8-6142-48d1-afa7-444f370ed550 nav-transparent section-flexible-grid relative flex-col flex-wrap items-center justify-center  lg:mt-0 lg:mb-0 mt-0 mb-0  flex  w-full overflow-hidden" >

    <div class="flex-grid--container relative w-full lg:pt-0 lg:pb-0 pt-0 pb-0 lg:pl-0 pl-0 active" >

      

      <div class="  flex flex-row flex-wrap lg:my-0 lg:-mx-0 -m-0 justify-center">
            <article class="block-70d005be-3293-44a9-8683-6478979edca5  relative block lg:h-auto image-height  h-auto-img lg:w-full w-full lg:py-0 lg:px-0 p-0 lg:order-none order-none"><div class="block__image_wrap blank  lg:relative relative hover-gradient transition-all duration-500  cubic h-full w-full"><img srcset="//cdn.shopify.com/s/files/1/2633/2144/files/HP-Compacts-desktop_b99c068a-cc95-4ff9-8f8a-b4f0dc5f25f0.jpg?v=1692831065&amp;width=180 180w,//cdn.shopify.com/s/files/1/2633/2144/files/HP-Compacts-desktop_b99c068a-cc95-4ff9-8f8a-b4f0dc5f25f0.jpg?v=1692831065&amp;width=360 360w,//cdn.shopify.com/s/files/1/2633/2144/files/HP-Compacts-desktop_b99c068a-cc95-4ff9-8f8a-b4f0dc5f25f0.jpg?v=1692831065&amp;width=720 720w,//cdn.shopify.com/s/files/1/2633/2144/files/HP-Compacts-desktop_b99c068a-cc95-4ff9-8f8a-b4f0dc5f25f0.jpg?v=1692831065&amp;width=1080 1080w,//cdn.shopify.com/s/files/1/2633/2144/files/HP-Compacts-desktop_b99c068a-cc95-4ff9-8f8a-b4f0dc5f25f0.jpg?v=1692831065&amp;width=1200 1200w,//cdn.shopify.com/s/files/1/2633/2144/files/HP-Compacts-desktop_b99c068a-cc95-4ff9-8f8a-b4f0dc5f25f0.jpg?v=1692831065&amp;width=1500 1500w" x-sizes="(min-width: 640px) 180px, 180px" src="//cdn.shopify.com/s/files/1/2633/2144/files/HP-Compacts-desktop_b99c068a-cc95-4ff9-8f8a-b4f0dc5f25f0.jpg?v=1692831065&amp;width=180 180w" loading="lazy" width="720" height="540" class="lg:relative top-0 left-0 max-w-full w-full h-full object-cover object-center lg:block hidden " alt="">
  <img srcset="//cdn.shopify.com/s/files/1/2633/2144/files/hp-compacts-feature-mobile.jpg?v=1692830342&amp;width=180 180w,//cdn.shopify.com/s/files/1/2633/2144/files/hp-compacts-feature-mobile.jpg?v=1692830342&amp;width=360 360w" x-sizes="(min-width: 640px) 180px, 180px" src="//cdn.shopify.com/s/files/1/2633/2144/files/hp-compacts-feature-mobile.jpg?v=1692830342&amp;width=180 180w" loading="lazy" width="720" height="540" class="relative  top-0 left-0 max-w-full w-full h-full object-cover object-center lg:hidden block " alt=""></div>
              <div class="block__text  h-full  w-full z-10 left-0 top-0 flex flex-col lg:items-start lg:justify-center items-center justify-end lg:text-left text-center lg:absolute absolute">
                <div class="block__text_content  group-hover:-translate-y-2 duration-1000 lg:max-w-3xl w-full lg:py-16 lg:px-16 py-8 px-4">
                    <h2 class="type--primary block__title  mt-0 mb-4" style="color: #ffffff; ">
                        Narrow Styles
                    </h2>
                    <p class="type--subline block__subtitle mt-0 mb-4 group-hover:leading-margin transition-all duration-1000" style="color: #ffffff; ">Slightly smaller renditions of some of our most popular frames.</p>
                    <div style="margin: 0 -8px">
                        <a class="inline-block mt-4 min-h-0 button button--primary" href="/collections/narrow" style="background-color: ; border-color: ; color: ;" previewlistener="true">
                            Shop Narrow
                        </a>
                    </div>
                </div>
              </div>
            </article>
          

        
      </div>
   
    </div>
  </div>
</section> */}
    </>
  );
};

export default ThreeProSwiper;
