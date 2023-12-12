import ButtonSolid from "../../../components/ButtonSolid/ButtonSolid.jsx";
import Picture from "../../../components/Picture/Picture.jsx";

const DynamicImgContain = () => {
  return (
    <>
      <section id="page_1" className="relative">
        <div className="dynamic-img-container relative">
          <Picture
            largeMedia={"(min-width: 960px)"}
            smallMedia={"(min-width: 600px)"}
            highRes={"/images/banner/HP-Desktop_Camo.png"}
            largeImg={"/images/banner/HP-Mobile_Camo.png"}
            smallImg={"/images/banner/HP-Mobile_Camo.png"}
          ></Picture>
        </div>
        <div className="block__text  h-full  w-full z-10 left-0 top-0 flex flex-col lg:items-start lg:justify-center items-center justify-end lg:text-left text-left lg:absolute absolute">
          <div className="block__text_content  group-hover:-translate-y-2 duration-1000 lg:max-w-3xl w-full lg:py-8 lg:px-16 py-8 px-8">
            <h2
              className="type--primary block__title  mt-0 mb-4 ITCGara text-6xl lg:text-[100px]"
              style={{ color: "white" }}
            >
              Camo is Here
            </h2>

            <p
              className=" type--subline block__subtitle mt-0 mb-4 group-hover:leading-margin transition-all duration-1000 TradeGodthicCn lg:text-2xl tracking-wide"
              style={{ color: "white" }}
            >
              It’s a disruptive pattern that acts like a neutral.
            </p>

            {/* <div style={{ margin: "0 -8px" }}>
              <a
                className="inline-block mt-4 min-h-0 button button--primary"
                href="#!"
              >
                Shop Camo
              </a>
            </div> */}

            <ButtonSolid child={"SHOP CAMO"} customClass={"mt-4"}></ButtonSolid>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicImgContain;
