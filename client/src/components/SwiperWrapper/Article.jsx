import "./cusSwip.scss";
import Picture from "../Picture/Picture.jsx";

const Article = ({ swiperContent }) => {
  return (
    <>
      <article
        className="swiper-slide swiper-slide__flex  relative lg:py-0 w-full swiper-slide-active bg-white"
        role="group"
      >
        <a
          className="block h-full relative group border border-l-0 border-t-0 swiper-slide__flex--border w-full"
          href="/collections/eye-appliances"
        >
          <div className="block__text absolute inset-0 z-10 lg:text-center text-center">
            <div className="block__text_content  w-full lg:py-16 lg:px-8 py-8 px-4">
              <h2 className="type--subhead-s1 flex justify-center items-center flex-col mb-4 mt-0 ITCGara text-2xl lg:text-3xl">
                {swiperContent.type}
                <span
                  style={{ backgroundImage: `url(${swiperContent.underline})` }}
                  className={
                    "opacity-0 block decoration group-hover:opacity-100 ease-in-out duration-300 transition cubic "
                  }
                ></span>
              </h2>
            </div>
          </div>

          <div className="block__image_wrap h-full lg:py-16 lg:px-8 py-8 px-4 lg:pb-4 pb-2 w-full">
            <div className="image_slider relative aspect-w-1 aspect-h-1 group-hover:-translate-y-2 transition-all duration-500">
              <Picture highRes={swiperContent.imgType}></Picture>
            </div>
          </div>
        </a>
      </article>
    </>
  );
};

export default Article;
