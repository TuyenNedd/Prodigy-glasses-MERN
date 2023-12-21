import React from "react";
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
const TwoProSwiper = () => {
  return (
    <>
      <div className="lg:text-center text-center relative">
        <section className="mt-10">
          <div className="w-full mx-auto flex flex-col">
            <div className="w-full">
              <div className="w-full h-full relative">
                <div className="flex flex-col lg:flex-row ITCGara text-white gap-0 lg:gap-4">
                  <TypesWrapMainMenu
                    customClass={"border-none"}
                    name={"Readers "}
                  >
                    <div className="sContainTwo">
                      <div>
                        <img
                          srcSet="//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_readers.jpg?v=1668713467&amp;width=180 180w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_readers.jpg?v=1668713467&amp;width=360 360w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_readers.jpg?v=1668713467&amp;width=720 720w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_readers.jpg?v=1668713467&amp;width=1080 1080w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_readers.jpg?v=1668713467&amp;width=1200 1200w"
                          src="//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_readers.jpg?v=1668713467&amp;width=180 180w"
                          loading="lazy"
                          className="h-[700px] w-full object-cover lg:block hidden"
                        ></img>
                        <img
                          srcSet="//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_readers.jpg?v=1668713467&amp;width=180 180w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_readers.jpg?v=1668713467&amp;width=360 360w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_readers.jpg?v=1668713467&amp;width=720 720w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_readers.jpg?v=1668713467&amp;width=1080 1080w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_readers.jpg?v=1668713467&amp;width=1200 1200w"
                          src="//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_readers.jpg?v=1668713467&amp;width=180 180w"
                          loading="lazy"
                          className="h-[470px] w-full object-cover lg:hidden block"
                          alt=""
                        ></img>
                      </div>
                      <div className="slide__title absolute inset-x-0 bottom-0 mb-5 hover-rise transition-all cubic duration-1000">
                        <p className="mb-4 text-center font-heading leading-none text-6xl lg:text-[100px]">
                          Readers
                        </p>
                        <p className="mb-4 text-center font-heading leading-none text-3xl">
                          For seeing close up
                        </p>
                      </div>
                    </div>
                  </TypesWrapMainMenu>

                  <TypesWrapMainMenu
                    customClass={"border-none"}
                    name={"Progressive Readers"}
                  >
                    <div className="sContainTwo">
                      <TypesWrapMainMenu
                        customClass={"border-none"}
                        name={"Progressive Readers"}
                      >
                        <div>
                          <img
                            srcSet="//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_progressives.jpg?v=1668713487&amp;width=180 180w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_progressives.jpg?v=1668713487&amp;width=360 360w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_progressives.jpg?v=1668713487&amp;width=720 720w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_progressives.jpg?v=1668713487&amp;width=1080 1080w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_progressives.jpg?v=1668713487&amp;width=1200 1200w"
                            src="//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_progressives.jpg?v=1668713487&amp;width=180 180w"
                            loading="lazy"
                            className="h-[700px] w-full object-cover lg:block hidden"
                          ></img>
                          <img
                            srcSet="//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_progressives.jpg?v=1668713487&amp;width=180 180w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_progressives.jpg?v=1668713487&amp;width=360 360w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_progressives.jpg?v=1668713487&amp;width=720 720w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_progressives.jpg?v=1668713487&amp;width=1080 1080w,//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_progressives.jpg?v=1668713487&amp;width=1200 1200w"
                            src="//cdn.shopify.com/s/files/1/2633/2144/files/web_hp_2x2_module_progressives.jpg?v=1668713487&amp;width=180 180w"
                            loading="lazy"
                            className="h-[470px] w-full object-cover lg:hidden block"
                            alt=""
                          ></img>
                        </div>
                      </TypesWrapMainMenu>

                      <div className="slide__title absolute inset-x-0 bottom-0 mb-5 hover-rise transition-all cubic duration-1000">
                        <p className="mb-4 text-center font-heading leading-none text-6xl lg:text-[100px]">
                          Progressives
                        </p>
                        <p className="mb-4 text-center font-heading leading-none text-3xl">
                          For seeing near & far
                        </p>
                      </div>
                    </div>
                  </TypesWrapMainMenu>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="ITCGara section--flex-grid">
        <section className="relative lg:p-0 p-0">
          <div
            className="section-template--16288645841084__d4c28c64-d5ca-427e-9a94-8c7ae6a9bfb2 nav-transparent section-flexible-grid relative flex-col flex-wrap items-center justify-center  lg:mt-4 lg:mb-0 mt-0 mb-0  flex  w-full overflow-hidden"
            style={{ backgroundColor: "#f5f2ec" }}
          >
            <div className="flex-grid--container relative w-full lg:pt-8 lg:pb-0 pt-8 pb-0 lg:pl-0 pl-0 active">
              <div className="  flex flex-row flex-wrap lg:my-0 lg:-mx-0 -m-0 justify-center">
                <article className=" relative block lg:h-auto content-height  h-auto lg:w-2/3 w-full lg:py-0 lg:px-0 p-0 lg:order-none order-none">
                  <div className="block__text  h-full  w-full z-10 left-0 top-0 flex flex-col lg:items-center lg:justify-end items-center justify-start lg:text-center text-center lg:relative relative">
                    <div
                      className="block__text_content  group-hover:-translate-y-2 duration-1000 lg:w-full w-full lg:py-16 lg:px-32 py-0 px-8"
                      style={{ backgroundColor: "#f5f2ec" }}
                    >
                      <h2 className="h3 block__title  mt-0 mb-4 text-3xl lg:text-6xl">
                        We’re a cult
                      </h2>

                      <p className="h5 block__subtitle mt-0 mb-4 group-hover:leading-margin transition-all duration-1000 text-lg lg:text-3xl leading-none tracking-wide">
                        We roll exclusively with people who aren’t afraid to be
                        themselves. People who’ve learned how to live well, be
                        happy, have fun and prioritize what’s important to them
                        in this moment while demonstrating that age is a
                        characteristic that only helps make them the awesome
                        force they are.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TwoProSwiper;
