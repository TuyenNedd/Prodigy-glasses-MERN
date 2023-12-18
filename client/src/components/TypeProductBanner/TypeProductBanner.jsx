import { Skeleton } from "@mui/material";

const TypeProductBanner = ({ type, desktopBanner, mobileBanner }) => {
  return (
    <>
      <section className=" section-collection-banner relative items-center justify-center lg:mt-0 lg:mb-0 mt-0 mb-0 lg:h-auto h-auto  block ">
        <div className="w-full h-full">
          <div className="block__image_wrap relative h-full w-full">
            {desktopBanner ? (
              <img
                loading="eager"
                src={desktopBanner}
                className="object-center top-0 left-0 m-0 max-w-full w-full h-full object-cover lg:block hidden"
              />
            ) : (
              <Skeleton variant="rounded" animation="wave" height={440} />
            )}
            <img
              loading="lazy"
              src={mobileBanner}
              className="object-center left-0 m-0 max-w-full w-full h-full object-cover lg:hidden block "
            ></img>
          </div>

          <div className="block__text w-full h-full z-20 absolute inset-0 flex flex-col lg:items-start lg:justify-center items-start justify-center lg:text-left text-left container">
            <div className="block__text_content w-full lg:max-w-3xl lg:py-0 lg:px-8 py-0 px-4">
              <h2
                className="m-0 text-6xl lg:text-[100px] ITCGara"
                style={{ color: "#ffffff" }}
              >
                {type}
              </h2>

              <div
                className="font-body mt-0 m-0 "
                style={{ color: "#ffffff", fontSize: "18px" }}
              >
                <p>
                  <span
                    className="text-lg TradeGodthicCn"
                    style={{ fontWeight: "400" }}
                  >
                    Read things up close. Maintain dignity. Check and check.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TypeProductBanner;
