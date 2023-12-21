import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addOrderProduct, resetOrder } from "../../redux/slides/orderSlide";
import * as ProductService from "../../services/ProductService";
import { convertPrice } from "../../utils";
import ProductSwiper from "./ProductSwiper.jsx";
import * as message from "../Message/Message";
import SlideShowProDetail from "../SlideShowProDetail/SlideShowProDetail.jsx";

import "./style.scss";
import { Skeleton } from "@mui/material";

import { Rate } from "antd";
import CommentsComponent from "../CommentsComponent/CommentsComponent.jsx";
import ReviewForm from "../ReviewForm/ReviewForm.jsx";
import ButtonSolid from "../ButtonSolid/ButtonSolid.jsx";
// import Notification from "../Notification/Notification.jsx";
const ProductDetails = ({ idProduct }) => {
  const [numProduct, setNumProduct] = useState(1);
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  const [errorLimitOrder, setErrorLimitOrder] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  // const [showNotification, setShowNotification] = useState(false);

  const [commentCount, setCommentCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const fetchGetDetailsProduct = async (context) => {
    const id = context?.queryKey && context?.queryKey[1];
    if (id) {
      const res = await ProductService.getDetailsProduct(id);
      return res.data;
    }
  };

  useEffect(() => {
    const orderRedux = order?.orderItems?.find(
      (item) => item.product === productDetails?._id
    );
    if (
      orderRedux?.amount + numProduct <= orderRedux?.countInstock ||
      (!orderRedux && productDetails?.countInStock > 0)
    ) {
      setErrorLimitOrder(false);
    } else if (productDetails?.countInStock === 0) {
      setErrorLimitOrder(true);
    }
  }, [numProduct]);

  useEffect(() => {
    if (order.isSucessOrder) {
      // message.success("Added to cart");
    }
    return () => {
      dispatch(resetOrder());
    };
  }, [order.isSucessOrder]);

  const { isLoading, data: productDetails } = useQuery(
    ["product-details", idProduct],
    fetchGetDetailsProduct,
    { enabled: !!idProduct }
  );
  const jsMenuFloat = document.querySelector(".js-menufloat-show");

  const handleAddOrderProduct = () => {
    if (!user?.id) {
      navigate("/sign-in", { state: location?.pathname });
    } else {
      // {
      //     name: { type: String, required: true },
      //     amount: { type: Number, required: true },
      //     image: { type: String, required: true },
      //     price: { type: Number, required: true },
      //     product: {
      //         type: mongoose.Schema.Types.ObjectId,
      //         ref: 'Product',
      //         required: true,
      //     },
      // },
      const orderRedux = order?.orderItems?.find(
        (item) => item.product === productDetails?._id
      );
      if (
        orderRedux?.amount + numProduct <= orderRedux?.countInstock ||
        (!orderRedux && productDetails?.countInStock > 0)
      ) {
        dispatch(
          addOrderProduct({
            orderItem: {
              name: productDetails?.name,
              amount: numProduct,
              image: productDetails?.image,
              price: productDetails?.price,
              product: productDetails?._id,
              discount: productDetails?.discount,
              countInstock: productDetails?.countInStock,
              type: productDetails?.type,
            },
          })
        );
        message.success("Added to cart successfully");
        jsMenuFloat.style.transform = "translateY(0%)";
        // setShowNotification(true);
        // setTimeout(() => {
        //   setShowNotification(false);
        // }, 2000);
      } else {
        setErrorLimitOrder(true);
      }
    }
  };

  const handelOpenReview = () => {
    setOpenReview(true);

    document.body.classList.add("!overflow-y-hidden");
  };
  const handelCloseReview = () => {
    setOpenReview(false);

    document.body.classList.remove("!overflow-y-hidden");
  };
  const handleReviewSubmit = () => {
    // This function will be called when the review is successfully submitted
    setOpenReview(false);
    document.body.classList.remove("!overflow-y-hidden");
  };
  return (
    <>
      {/* {isLoading ? (
        <Skeleton variant="rounded" sx={{ bgcolor: "grey.300" }}></Skeleton>
      ) : (
        <></>
      )} */}

      <section className="relative items-start lg:flex max-w-screen-2xl mx-auto justify-center">
        <div className="product-essentials__title--mobile lg:hidden transport-recipient">
          <div>
            <div className="flex align-top justify-between pb-1 ITCGara">
              {isLoading ? (
                <Skeleton
                  height={60}
                  style={{ width: "100%" }}
                  variant="rounded"
                  sx={{ bgcolor: "grey.300" }}
                ></Skeleton>
              ) : (
                <>
                  <h1 className="product-essentials__liquid_title_price h4 m-0 flex flex-col justify-top text-2xl">
                    {productDetails?.name}
                  </h1>
                </>
              )}

              <div className="flex flex-col justify-end lg:pl-4 lg:pb-1.5">
                {isLoading ? (
                  <Skeleton
                    height={60}
                    style={{ width: "100%" }}
                    variant="rounded"
                    sx={{ bgcolor: "grey.300" }}
                  ></Skeleton>
                ) : (
                  <>
                    <p className="product-essentials__price text-2xl lg:text-3xl flex justify-center text-[var(--primaryColor)] items-end">
                      <span>
                        {convertPrice(
                          productDetails?.price -
                            (productDetails?.price * productDetails?.discount) /
                              100
                        )}
                      </span>
                      <span className="ml-2 line-through text-gray-400 text-base">
                        {convertPrice(productDetails?.price)}
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="product-essentials__reviews--mobile lg:hidden transport-recipient">
          <div className="flex justify-between items-center pt-2 pb-5 px-5 lg:px-0">
            <div id="tt-teaser-widget">
              <div className="tt-c-teaser tt-u-spacing--left--xs">
                {isLoading ? (
                  <Skeleton
                    className="mt-2 mb-5"
                    width={200}
                    height={20}
                    variant="rounded"
                    sx={{ bgcolor: "grey.300" }}
                  ></Skeleton>
                ) : (
                  <>
                    <div className="pointer-events-none">
                      <Rate
                        className="text-[var(--primaryColor)] text-base"
                        allowHalf
                        defaultValue={productDetails?.rating}
                        value={averageRating || productDetails?.rating}
                      />
                    </div>
                    <a className="tt-c-teaser__link underline" href="#reviews">
                      Read {commentCount}{" "}
                      {commentCount > 1 ? "Reviews" : "Review"}
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <article className="product-essentials__gallery relative flex flex-col w-full lg:w-2/5 shrink-0 lg:overflow-x-hidden lg:overflow-y-hidden user-select-none lg:pb-10 lg:sticky top-0">
          <div className="w-full group product-essentials__gallery-wrapper">
            {isLoading ? (
              <Skeleton
                className="mt-10"
                height={500}
                variant="rounded"
                sx={{ bgcolor: "grey.300", width: "100%" }}
              ></Skeleton>
            ) : (
              <>
                <div className="w-full group relative">
                  <ProductSwiper
                    image={productDetails?.image}
                    imageHover={productDetails?.imageHover}
                    imageDetail={productDetails?.imageDetail}
                  ></ProductSwiper>
                </div>
              </>
            )}
          </div>
        </article>

        <article className="product-essentials__buy-box lg:w-[43%] w-full lg:pt-10 animate active">
          <div className="bg-white buy-box__wrapper relative transition-opacity">
            {isLoading ? (
              <Skeleton
                height={60}
                width={500}
                variant="rounded"
                sx={{ bgcolor: "grey.300" }}
              ></Skeleton>
            ) : (
              <>
                <div className="product-essentials__title--desktop hidden lg:block">
                  <div>
                    <div className="flex align-top justify-between pb-1  ITCGara">
                      <h1 className="product-essentials__liquid_title_price h4 m-0 flex flex-col justify-top text-[40px]">
                        {productDetails?.name}
                      </h1>
                      <div className="flex flex-col justify-end lg:pl-4 lg:pb-1.5">
                        <p className="product-essentials__price flex items-end justify-center text-3xl text-[var(--primaryColor)]">
                          <span>
                            {convertPrice(
                              productDetails?.price -
                                (productDetails?.price *
                                  productDetails?.discount) /
                                  100
                            )}
                          </span>
                          <span className="ml-2 line-through text-gray-400 text-lg">
                            {convertPrice(productDetails?.price)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {isLoading ? (
              <Skeleton
                className="mt-3 mb-5"
                width={200}
                height={20}
                variant="rounded"
                sx={{ bgcolor: "grey.300" }}
              ></Skeleton>
            ) : (
              <>
                <div className="product-essentials__reviews--desktop hidden lg:block">
                  <div className="flex justify-between items-center pt-2 pb-5 px-5 lg:px-0">
                    <div id="tt-teaser-widget">
                      <div className="tt-c-teaser tt-u-spacing--left--xs">
                        <div className="tt-c-rating tt-c-teaser__rating">
                          <div className="tt-u-clip-hide">
                            Rated 4.7 out of 5
                          </div>
                          <div className="pointer-events-none">
                            <Rate
                              className="text-[var(--primaryColor)] text-base"
                              allowHalf
                              defaultValue={productDetails?.rating}
                              value={averageRating || productDetails?.rating}
                            />
                          </div>
                        </div>
                        <a
                          className="tt-c-teaser__link underline text-xs TradeGodthicCn"
                          href="#reviews"
                        >
                          Read {commentCount}{" "}
                          {commentCount > 1 ? "Reviews" : "Review"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {isLoading ? (
              <Skeleton
                className="mb-2"
                width={500}
                height={65}
                variant="rounded"
                sx={{ bgcolor: "grey.300" }}
              ></Skeleton>
            ) : (
              <>
                <details className="accordion pb-2" type="accordion">
                  <summary className="accordion-title accordion-title--ps p-5 lg:py-4 lg:px-5">
                    <span className="flex items-center">
                      <p className="m-0 text-2xl lg:text-3xl mr-2.5 -mb-[3px]">
                        1. Glass Type
                      </p>
                      <p className="m-0 text-sm">
                        <span className="text-sm text-[var(--primaryColor)] TradeGodthic-BoldCn">
                          {productDetails?.type}
                        </span>
                      </p>
                    </span>

                    <span className="accordion-control accordion-control--open invisible">
                      <span className="accordion-control accordion-control--edit font-body text-sm">
                        Edit
                      </span>
                    </span>
                  </summary>
                </details>
              </>
            )}
            {isLoading ? (
              <Skeleton
                className="mb-2"
                width={500}
                height={65}
                variant="rounded"
                sx={{ bgcolor: "grey.300" }}
              ></Skeleton>
            ) : (
              <>
                <details className="accordion pb-2" type="accordion">
                  <summary className="accordion-title accordion-title--ps p-5 lg:py-4 lg:px-5">
                    <span className="flex items-center">
                      <p className="m-0 text-2xl lg:text-3xl mr-2.5 -mb-[3px]">
                        2. Frame Color
                      </p>
                      <p className="m-0 text-sm">
                        <span className="text-sm text-[var(--primaryColor)] TradeGodthic-BoldCn">
                          Default
                        </span>
                      </p>
                    </span>

                    <span className="accordion-control accordion-control--open invisible">
                      <span className="accordion-control accordion-control--edit font-body text-sm">
                        Edit
                      </span>
                    </span>
                  </summary>

                  {/* <article className="accordion-panel accordion-panel--ps">
                <div>
                  <div className="flex flex-wrap border-b mb-3">
                    <fieldset className="ps-options ps-options--checkbox w-full mb-1">
                      <div className="field field--checkbox ">
                        <label className="flex items-start mb-0 pointer-none">
                          <input type="radio" />

                          <span className="rounded-full border w-6 h-6 flex items-center justify-center flex-shrink-0 mr-2"></span>
                          <span>
                            <p className="m-0 type--label-m text-black">
                              <span className="relative">Readers</span>
                            </p>

                            <p className="m-0 text-sm font-body">
                              Your chosen magnification across the entire lens
                              allows you to read things up close without
                              squinting or using a magnifying glass.
                            </p>
                          </span>
                        </label>
                      </div>

                      <div className="field field--checkbox ">
                        <label className="flex items-start mb-0 pointer-none">
                          <input type="radio" />

                          <span className="rounded-full border w-6 h-6 flex items-center justify-center flex-shrink-0 mr-2"></span>
                          <span>
                            <p className="m-0 type--label-m text-black">
                              <span className="relative">
                                Progressive Readers
                              </span>
                            </p>

                            <p className="m-0 text-sm font-body">
                              Seamlessly transition from no magnification at the
                              top to your preferred magnification at the bottom,
                              allowing you to see both near and far.
                            </p>
                          </span>
                        </label>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </article> */}
                </details>
              </>
            )}
            {isLoading ? (
              <Skeleton
                className="mb-2"
                width={500}
                height={65}
                variant="rounded"
                sx={{ bgcolor: "grey.300" }}
              ></Skeleton>
            ) : (
              <>
                <details className="accordion pb-2" type="accordion">
                  <summary className="accordion-title accordion-title--ps p-5 lg:py-4 lg:px-5">
                    <span className="flex items-center">
                      <p className="m-0 text-2xl lg:text-3xl mr-2.5 -mb-[3px]">
                        3. Count In Stock
                      </p>
                      <p className="m-0 text-sm">
                        <span className="text-sm text-[var(--primaryColor)] TradeGodthic-BoldCn">
                          {productDetails?.countInStock}
                        </span>
                      </p>
                    </span>

                    <span className="accordion-control accordion-control--open invisible">
                      <span className="accordion-control accordion-control--edit font-body text-sm">
                        Edit
                      </span>
                    </span>
                  </summary>
                </details>
              </>
            )}
            {isLoading ? (
              <Skeleton
                className="mb-2"
                width={500}
                height={65}
                variant="rounded"
                sx={{ bgcolor: "grey.300" }}
              ></Skeleton>
            ) : (
              <>
                <details className="accordion pb-2" type="accordion">
                  <summary className="accordion-title accordion-title--ps p-5 lg:py-4 lg:px-5">
                    <span className="flex items-center">
                      <p className="m-0 text-2xl lg:text-3xl mr-2.5 -mb-[3px]">
                        4. Discount
                      </p>
                      <p className="m-0 text-sm">
                        <span className="text-sm text-[var(--primaryColor)] TradeGodthic-BoldCn">
                          {productDetails?.discount}%
                        </span>
                      </p>
                    </span>

                    <span className="accordion-control accordion-control--open invisible">
                      <span className="accordion-control accordion-control--edit font-body text-sm">
                        Edit
                      </span>
                    </span>
                  </summary>
                </details>
              </>
            )}

            <div
              className={`lg:pb-4 p-5 lg:p-0 product-selection__add-to-cart ${
                productDetails?.countInStock === 0 ? "pointer-events-none" : ""
              }`}
            >
              <ButtonSolid
                // onClick={handleAddOrderProduct}
                onClick={() => {
                  if (productDetails?.countInStock === 0) {
                    // countInStock is 0, do not proceed with the action
                    return;
                  }
                  handleAddOrderProduct();
                }}
                child={"Add to cart"}
                customClass={
                  "text-lg TradeGodthic-BoldCn uppercase tracking-wider w-full inline-flex"
                }
                disabled={productDetails?.countInStock === 0}
              ></ButtonSolid>
              {/* <button
                onClick={handleAddOrderProduct}
                className="button w-full inline-flex bg-[var(--primaryColor)] items-center justify-center py-4 px-5 text-lg TradeGodthic-BoldCn uppercase tracking-wider rounded-md hover:bg-[#ff9647] transition-all duration-300"
              >
                Add to cart
              </button> */}
              {productDetails?.countInStock === 0 ? (
                <>
                  <div className="text-red-600 TradeGodthic-BoldCn uppercase text-lg flex justify-center">
                    Product is out of stock
                  </div>
                </>
              ) : (
                ""
              )}
            </div>

            <div className="text-center text-base my-4 TradeGodthicCn">
              Free exchanges and easy returns on all glasses. <br />
              <a className="underline text-[var(--secondaryColor)] hover:underline hover:text-[var(--secondaryColor)]">
                Learn More
              </a>{" "}
              |{" "}
              <a className="underline text-[var(--secondaryColor)] hover:underline hover:text-[var(--secondaryColor)]">
                Returns Portal
              </a>{" "}
              <br />
              Product questions? Call or text an optical <br /> specialist at
              (014)09-02023.
            </div>
          </div>
        </article>
      </section>

      <div className="relative w-full group block active ITCGara">
        <img
          src="//caddislife.com/cdn/shop/files/D28.jpg?v=1670281561&amp;width=180 180w"
          loading="lazy"
          className="absolute top-0 left-0 h-full w-full object-cover lg:block hidden"
        />

        <img
          src="//caddislife.com/cdn/shop/files/D28_vert.jpg?v=1670281561&amp;width=180 180w"
          loading="lazy"
          className="absolute top-0 left-0 h-full w-full object-cover lg:hidden block"
        />

        <div className="grid grid-cols-1 relative z-10 container p-5 lg:grid-cols-4 lg:gap-8 lg:py-8 mx-auto">
          <div className="features__title relative flex items-center justify-center px-8 first:pt-[50px] lg:p-[50px] lg:first:p-[60px]">
            <img
              src="//caddislife.com/cdn/shop/files/background_texture_2x_9393fcec-09a6-4a2b-b6c3-dea71d975dac.jpg?v=1666204358&amp;width=180 180w"
              loading="lazy"
              className="absolute inset-0 object-cover w-full h-full rounded-t-md lg:rounded-t-md lg:rounded-md"
            />

            <div className="relative transition-opacity cubic opacity-0 duration-1000 group-active:opacity-100">
              <h2 className="text-3xl text-center m-0">
                Hits you like a ton of bricks.
              </h2>
            </div>
          </div>
          <div className="features__content relative after:border-b after:last:border-b-0 after:border-[rgba(97,88,78,.25)] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-3/4 after:mx-auto after:h-min lg:after:border-b-0 py-[30px] px-[30px] lg:pt-[50px] lg:px-[30px] lg:pb-[50px]">
            <img
              src="//caddislife.com/cdn/shop/files/background_texture_2x_9393fcec-09a6-4a2b-b6c3-dea71d975dac.jpg?v=1666204358&amp;width=180 180w"
              loading="lazy"
              className="absolute inset-0 object-cover w-full h-full rounded-none lg:rounded-md"
            />

            <div className="relative text-center lg:pb-0 transition-opacity cubic opacity-0 duration-1000 group-active:opacity-100">
              <h3 className="text-xl xl:text-2xl mt-0 mb-2.5 lg:mb-6 text-center">
                Description
              </h3>

              <div className="text-sm lg:text-base text-center TradeGodthicCn">
                {productDetails?.description}
              </div>
            </div>
          </div>
          <div className="features__content relative after:border-b after:last:border-b-0 after:border-[rgba(97,88,78,.25)] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-3/4 after:mx-auto after:h-min lg:after:border-b-0 py-[30px] px-[30px] lg:pt-[50px] lg:px-[30px] lg:pb-[50px]">
            <img
              src="//caddislife.com/cdn/shop/files/background_texture_2x_9393fcec-09a6-4a2b-b6c3-dea71d975dac.jpg?v=1666204358&amp;width=180 180w"
              loading="lazy"
              className="absolute inset-0 object-cover w-full h-full rounded-none lg:rounded-md"
            />

            <div className="relative text-center lg:pb-0 transition-opacity cubic opacity-0 duration-1000 group-active:opacity-100">
              <h3 className="text-xl xl:text-2xl mt-0 mb-2.5 lg:mb-6 text-center">
                Features
              </h3>

              <div className="text-sm lg:text-base text-center TradeGodthicCn">
                <ul>
                  <li>
                    Proprietary frq™ near-clear lenses are infused with blue
                    light blocking technology to reduce eyestrain and improve
                    sleep.
                  </li>{" "}
                  <li>
                    Lenses include anti-reflective, scratch-resistant coating.
                  </li>{" "}
                  <li>
                    Premium, bio-based acetate frame with 5-barrel industrial
                    hinges.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="features__content relative after:border-b after:last:border-b-0 after:border-[rgba(97,88,78,.25)] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-3/4 after:mx-auto after:h-min lg:after:border-b-0 py-[30px] px-[30px] lg:pt-[50px] lg:px-[30px] lg:pb-[50px]">
            <img
              src="//caddislife.com/cdn/shop/files/background_texture_2x_9393fcec-09a6-4a2b-b6c3-dea71d975dac.jpg?v=1666204358&amp;width=180 180w"
              loading="lazy"
              className="absolute inset-0 object-cover w-full h-full rounded-b-md lg:rounded-md"
            />

            <div className="relative text-center lg:pb-0 transition-opacity cubic opacity-0 duration-1000 group-active:opacity-100">
              <h3 className="text-xl xl:text-2xl mt-0 mb-2.5 lg:mb-6 text-center">
                Fit
              </h3>

              <div className="text-sm lg:text-base text-center TradeGodthicCn">
                Statement style, medium to large fit
              </div>

              <div className="slider mb-6 mt-10 mx-auto max-w-xs">
                <div className="slider__bar flex mb-[5px]">
                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden TradeGodthicCn">
                      fit:small
                    </p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden">.</p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden">.</p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden TradeGodthicCn">
                      fit:small-medium
                    </p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden">.</p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden">.</p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden TradeGodthicCn">
                      fit:medium
                    </p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden">.</p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden">.</p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex slider__segment--active">
                    <span className="w-[9px] h-[9px] rounded-full bg-black flex relative"></span>

                    <p className="slider__segment-label hidden">
                      fit:medium-large
                    </p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden">.</p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden">.</p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden TradeGodthicCn">
                      fit:large
                    </p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden">.</p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden">.</p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden TradeGodthicCn">
                      fit:large-xlarge
                    </p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden">.</p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden">.</p>
                  </span>

                  <span className="slider__segment w-full relative text-center justify-center items-center flex ">
                    <span className="w-[3px] h-[3px] rounded-full bg-secondary opacity-25 flex"></span>

                    <p className="slider__segment-label hidden TradeGodthicCn">
                      fit:xlarge
                    </p>
                  </span>
                </div>
                <div className="slider__legend flex justify-between">
                  <span className="title--label-s text-[0.625rem] TradeGodthicCn">
                    Small
                  </span>

                  <span className="title--label-s text-[0.625rem]">
                    X-Large
                  </span>
                </div>
              </div>

              <div className="text-sm space-y-2.5 reset-p TradeGodthicCn">
                <p>
                  A square frame shape ideal for heart, round, and oval faces.
                </p>
              </div>

              <div className="mt-5">
                <a className="text-sm TradeGodthicCn">See Frame Measurements</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="reviews">
        <CommentsComponent
          imageR={productDetails?.image}
          typeR={productDetails?.type}
          proNameR={productDetails?.name}
          openF={handelOpenReview}
          productId={idProduct}
          setCommentCount={setCommentCount}
          setAverageRating={setAverageRating}
        ></CommentsComponent>
      </div>

      <SlideShowProDetail></SlideShowProDetail>
      {openReview && (
        <ReviewForm
          closeF={handelCloseReview}
          imageR={productDetails?.image}
          typeR={productDetails?.type}
          proNameR={productDetails?.name}
          productId={idProduct}
          userId={user?.id}
          onReviewSubmit={handleReviewSubmit}
        ></ReviewForm>
      )}
      {/* {showNotification && (
        <Notification notiText={"✔ Added to cart successfully"} />
      )} */}
    </>
  );
};

export default ProductDetails;
