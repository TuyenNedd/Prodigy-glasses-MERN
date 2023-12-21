import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import * as ProductService from "../../../services/ProductService.js";
import { useQuery } from "@tanstack/react-query";
import { shuffle } from "lodash";
import "./style.scss";

import RandomProduct from "../../../components/RandomProduct/RandomProduct.jsx";
const Explore = () => {
  const fetchProductAll = async () => {
    const res = await ProductService.getAllProduct();
    console.log("fetchProductAll ~ res:", res);
    return res;
  };
  const { data: products } = useQuery(["products"], fetchProductAll);

  return (
    <>
      <section className="relative  block  section-slideshow section-slideshow-collection lg:mt-8 lg:mb-8 mt-8 mb-8 lg:py-0 py-0">
        <div className="w-full mx-auto flex flex-col text-center lg:text-center">
          <div className="lg:pl-32 pl-16 lg:pr-32 pr-16">
            <h5
              className="type--eyebrow mt-0 mb-[18px] lg:mb-[30px] text-sm lg:text-base TradeGodthic-BoldCn uppercase tracking-wider"
              style={{ color: "#443828" }}
            >
              Explore by Color
            </h5>
          </div>

          <div className="lg:pl-32 pl-16 lg:pr-32 pr-16">
            <h2 className="type--feature mt-0 mb-2.5 text-[40px] lg:text-[100px] ITCGara leading-none">
              Non-conformists everywhere
              <br /> like these popular frames.
            </h2>
          </div>

          <div className="product-recommendations__carousel w-full mt-16">
            <div className="w-full h-full relative analyticsProductGridList">
              <Swiper
                // navigation={true}
                modules={[Navigation]}
                cssMode={true}
                loop={true}
                breakpoints={{
                  1: {
                    slidesPerView: 1.5,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 3.5,
                    spaceBetween: 0,
                    speed: 1500,
                  },
                }}
                navigation={{
                  nextEl: ".swiper-button-next-random",
                  prevEl: ".swiper-button-prev-random",
                }}
                className="randomSwiper text-white ITCGara"
              >
                {shuffle(products?.data)
                  .slice(0, 10)
                  .map((product) => (
                    <>
                      <SwiperSlide key={product._id}>
                        <RandomProduct
                          idRan={product._id}
                          name={product.name}
                          type={product.type}
                          selled={product.selled}
                          countInStock={product.countInStock}
                          image={product.image}
                          imageHover={product.imageHover}
                          discount={product.discount}
                          price={product.price}
                        ></RandomProduct>
                      </SwiperSlide>
                    </>
                  ))}
                <button className="btn-control swiper-prev swiper-button-prev-random top-1/2 -translate-y-1/2 absolute p-2 left-0 lg:left-20 h-10 text-dark transform z-10 transition-all user-select-none hidden lg:block">
                  <div className="sr-only">Previous slide</div>
                </button>
                <button className="btn-control swiper-next swiper-button-next-random top-1/2 -translate-y-1/2 absolute p-2 right-0 lg:right-20 h-10 text-dark transform z-10 transition-all user-select-none hidden lg:block">
                  <div className="sr-only">Next slide</div>
                </button>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
