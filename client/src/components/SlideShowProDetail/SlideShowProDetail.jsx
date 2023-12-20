// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";

const SlideShow = () => {
  return (
    <>
      <section className="section-slideshow-details ">
        <div className="w-full relative">
          <div className="relative flex flex-col items-end justify-end w-full">
            <div className="flex flex-wrap">
              <Swiper
                slidesPerView={"auto"}
                loop={true}
                speed={7000}
                allowTouchMove={false}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  // reverseDirection: true,
                  // waitForTransition: false,
                }}
                breakpoints={{
                  1: {
                    freeMode: true,
                    // spaceBetween: 10,
                  },
                  1024: {
                    freeMode: true,
                    // spaceBetween: 10,
                  },
                }}
                modules={[Autoplay, FreeMode]}
                className="mySwiper my-2"
              >
                <SwiperSlide className="w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/441905680/square_medium/293bb6931e3cd54f2791.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/441972647/square_medium/3cfaa6462a5e1601d947.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/566067037/square_medium/810a6b835c5240371a8a.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/512959728/square_medium/98e3319e8dc0bcb279a6.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/441972716/square_medium/fad2974f050024d94d59.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/470342701/square_medium/224633e82b8ed22dd172.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/558336897/square_medium/6390892519dacdadb8d7.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/523654322/square_medium/d0a6a127f57615e4a173.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/465275271/square_medium/47b659709ab7252e61a9.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/441905680/square_medium/293bb6931e3cd54f2791.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/441972647/square_medium/3cfaa6462a5e1601d947.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/566067037/square_medium/810a6b835c5240371a8a.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/512959728/square_medium/98e3319e8dc0bcb279a6.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/441972716/square_medium/fad2974f050024d94d59.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/470342701/square_medium/224633e82b8ed22dd172.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/558336897/square_medium/6390892519dacdadb8d7.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/523654322/square_medium/d0a6a127f57615e4a173.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/465275271/square_medium/47b659709ab7252e61a9.jpg"
                    className="w-full h-auto"
                  />
                </SwiperSlide>
              </Swiper>
              <Swiper
                slidesPerView={"auto"}
                loop={true}
                speed={7000}
                allowTouchMove={false}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  reverseDirection: true,
                  // waitForTransition: false,
                }}
                breakpoints={{
                  1: {
                    freeMode: true,
                    // spaceBetween: 10,
                  },
                  1024: {
                    freeMode: true,
                    // spaceBetween: 10,
                  },
                }}
                modules={[Autoplay, FreeMode]}
                className="mySwiper mb-2"
              >
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/522629916/square_medium/c0ec433eddb20889fbce.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/499247283/square_medium/d0b07308f2518f8ecf24.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/441978907/square_medium/8b9c5c0189f3fafac48a.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/483875150/square_medium/15e36f8082a9d0ce6080.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/510962392/square_medium/48ff6ccd8f01d852bc7d.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/528404323/square_medium/519a39904250877539a2.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/444079949/square_medium/d1dccb3194da40e4a419.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/441978798/square_medium/c3f6613fe9a8a41e7d29.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/492486798/square_medium/581d8be6394c38d31db2.webp"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/522629916/square_medium/c0ec433eddb20889fbce.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/499247283/square_medium/d0b07308f2518f8ecf24.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/441978907/square_medium/8b9c5c0189f3fafac48a.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/483875150/square_medium/15e36f8082a9d0ce6080.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/510962392/square_medium/48ff6ccd8f01d852bc7d.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/528404323/square_medium/519a39904250877539a2.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/444079949/square_medium/d1dccb3194da40e4a419.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/441978798/square_medium/c3f6613fe9a8a41e7d29.jpg"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className=" w-1/4 lg:w-[14%] pr-2 lg:pr-3">
                  <img
                    src="https://static.pxlecdn.com/photos/492486798/square_medium/581d8be6394c38d31db2.webp"
                    className="w-full h-auto"
                    loading="lazy"
                  />
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
