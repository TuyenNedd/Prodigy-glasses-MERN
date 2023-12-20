import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardProduct from "../../../components/CardProduct/CardProduct.jsx";
import { useEffect, useState } from "react";
import * as ProductService from "../../../services/ProductService.js";
const Explore = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      // Fetch all products or use your existing logic to get products
      const allProducts = await ProductService.getAllProducts();

      // Shuffle the products to get a random order
      const shuffledProducts = shuffleArray(allProducts);

      // Take the first 10 products as randomProducts
      const selectedProducts = shuffledProducts.slice(0, 10);

      setRandomProducts(selectedProducts);
    };

    fetchRandomProducts();
  }, []);

  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
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
                {randomProducts.map((product) => (
                  <SwiperSlide key={product._id} className="w-[200px]">
                    <CardProduct product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
