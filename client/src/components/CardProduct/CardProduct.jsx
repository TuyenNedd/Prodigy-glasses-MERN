import { useLocation, useNavigate } from "react-router-dom";
import { convertPrice } from "../../utils.js";
import "./cart.scss";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce.js";
import { useEffect, useState } from "react";
import * as ProductService from "../../services/ProductService.js";
import { Skeleton } from "@mui/material";

const CardProduct = ({ props, product }) => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);

  const { state } = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [panigate, setPanigate] = useState({
    page: 0,
    limit: 10,
    total: 1,
  });
  const fetchProductType = async (type, page, limit) => {
    setLoading(true);
    const res = await ProductService.getProductType(type, page, limit);
    if (res?.status == "OK") {
      setLoading(false);
      setProducts(res?.data);
      setPanigate({ ...panigate, total: res?.totalPage });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (state) {
      fetchProductType(state, panigate.page, panigate.limit);
    }
  }, [state, panigate.page, panigate.limit]);

  // const onChange = (current, pageSize) => {
  //   setPanigate({ ...panigate, page: current - 1, limit: pageSize });
  // };
  // Lấy thông tin của sản phẩm đầu tiên trong danh sách products
  // const firstProduct = products.length > 0 ? products[0] : null;
  // const {
  //   countInStock,
  //   description,
  //   image,
  //   imageHover,
  //   imageDetail,
  //   name,
  //   price,
  //   rating,
  //   type,
  //   discount,
  //   selled,
  //   id,
  // } = props;
  const navigate = useNavigate();
  const handleDetailsProduct = (id) => {
    navigate(`/product-details/${id}`);
    console.log(id);
  };
  return (
    <>
      {/* {products
        ?.filter((pro) => {
          if (searchDebounce === "") {
            return pro;
          } else if (
            pro?.name?.toLowerCase()?.includes(searchDebounce?.toLowerCase())
          ) {
            return pro;
          }
        }) */}

      {/* filter(
          (product) =>
            product.selled === undefined || typeof product.selled === "number"
        )
        .sort((a, b) => (b.selled || 0) - (a.selled || 0)) */}
      {products?.map((product) => {
        return (
          <>
            <article
              key={product._id}
              className="product-grid__item productGridItem"
            >
              <div className="relative flex flex-col h-full product-item product-item--normal ">
                <div
                  className={`flex flex-col h-full overflow-hidden product-item__outer ${
                    loading ? "" : "group"
                  }`}
                >
                  <div className="product-item__contents relative flex-grow">
                    <div className="relative product-item__image-bg">
                      <a
                        onClick={() => handleDetailsProduct(product._id)}
                        className="product-item__link"
                      >
                        <div className="product-item__meta">
                          <div className="text-left">
                            {loading ? (
                              <Skeleton
                                className="mb-1"
                                variant="rounded"
                                sx={{ bgcolor: "grey.500" }}
                              ></Skeleton>
                            ) : (
                              <>
                                <h2 className="product-title product-item__title my-0 TradeGodthic-BoldCn">
                                  {product.name}
                                </h2>
                              </>
                            )}
                            {loading ? (
                              <Skeleton
                                variant="rounded"
                                sx={{ bgcolor: "grey.500" }}
                              ></Skeleton>
                            ) : (
                              <h2 className="product-title product-item__title my-0 TradeGodthic-BoldCn">
                                <span className="TradeGodthic-BoldCn">
                                  {product.type}
                                </span>
                              </h2>
                            )}
                            <div className="opacity-0 h-0">
                              kkkkkkkkkkkkkkkkk
                            </div>
                          </div>
                          <div className="text-right">
                            {loading ? (
                              <Skeleton
                                variant="rounded"
                                sx={{ bgcolor: "grey.500" }}
                              ></Skeleton>
                            ) : (
                              <h2 className="product-title product-item__title my-0 TradeGodthic-BoldCn">
                                <span className="TradeGodthic-BoldCn">
                                  {product.selled === undefined ? (
                                    <>Sold: 0</>
                                  ) : (
                                    <>Sold: {product.selled}</>
                                  )}
                                </span>
                              </h2>
                            )}
                          </div>
                        </div>

                        <figure className="product-item__image-wrapper">
                          {product.countInStock === 0 ? (
                            <div className="sold-out text-white flex justify-center items-center text-lg md:text-xl lg:text-2xl xl:text-4xl font-extrabold uppercase TradeGodthic-BoldCn p-3 xl:p-5">
                              <span>Out of stock</span>
                            </div>
                          ) : (
                            ""
                          )}

                          {loading ? (
                            <Skeleton
                              height={1000}
                              variant="rounded"
                              sx={{ bgcolor: "grey.500" }}
                            ></Skeleton>
                          ) : (
                            <img
                              alt="Miklos | Reading Glasses"
                              src={product.image}
                              loading="lazy"
                              width="486"
                              height="486"
                              className="product-item__image product-item__image--main bg-white"
                            />
                          )}

                          <div className="product-image__hover product-item__image-bg flex absolute transition-opacity opacity-0 group-hover:opacity-100 inset-0 ">
                            <img
                              alt="Miklos | Reading Glasses Hover"
                              src={product.imageHover}
                              loading="lazy"
                              width="360"
                              height="360"
                              className="object-contain w-full h-full product-item__image--hover bg-white"
                            />
                          </div>
                        </figure>
                      </a>
                    </div>

                    <div className="product-item__info">
                      {loading ? (
                        <Skeleton
                          className="w-[30%]"
                          // height={1000}
                          variant="rounded"
                          sx={{ bgcolor: "grey.500" }}
                        ></Skeleton>
                      ) : (
                        <div className="product-item__footer">
                          <div className="product-item__siblings overflow-x-hidden flex items-center">
                            <div className="leading-snug product-item__price flex space-x-1 TradeGodthicCn">
                              <span className="text-base text-red-600">
                                {convertPrice(
                                  product.price -
                                    (product.price * product.discount) / 100
                                )}
                              </span>
                              <span className="text-base line-through text-gray-500">
                                {convertPrice(product.price)}
                              </span>
                            </div>

                            {/* <ul className="lg:flex hidden items-center mr-1">
                              <li className="rounded-full border border-transparent active:border-secondary overflow-hidden h-[22px] w-[22px] p-0.5 cursor-pointer mr-1 active">
                                <span className="block w-full h-full overflow-hidden rounded-full">
                                  <img
                                    alt=""
                                    src="//caddislife.com/cdn/shop/files/sweetgrass.png"
                                  />
                                </span>
                              </li>

                              <li className="rounded-full border border-transparent active:border-secondary overflow-hidden h-[22px] w-[22px] p-0.5 cursor-pointer mr-1 ">
                                <span className="block w-full h-full overflow-hidden rounded-full">
                                  <img
                                    alt=""
                                    src="//caddislife.com/cdn/shop/files/matte-black.png"
                                  />
                                </span>
                              </li>

                              <li className="rounded-full border border-transparent active:border-secondary overflow-hidden h-[22px] w-[22px] p-0.5 cursor-pointer mr-1 ">
                                <span className="block w-full h-full overflow-hidden rounded-full">
                                  <img
                                    alt=""
                                    src="//caddislife.com/cdn/shop/files/turtle.png"
                                  />
                                </span>
                              </li>
                            </ul> */}

                            {/* <span className="type--label-s product-item__color leading-snug  text-secondary hidden lg:block TradeGodthic-BoldCn text-xs uppercase tracking-wider">
                              + <span>7</span> Colors
                            </span>

                            <span className="type--label-s product-item__color leading-snug block text-secondary lg:hidden TradeGodthic-BoldCn text-xs uppercase tracking-wider">
                              + <span>10</span> Colors
                            </span> */}
                          </div>
                        </div>
                      )}
                      {loading ? (
                        <Skeleton
                          className="mt-2 w-[30%]"
                          // height={1000}
                          variant="rounded"
                          sx={{ bgcolor: "grey.500" }}
                        ></Skeleton>
                      ) : (
                        <>
                          <div className="leading-snug product-item__price flex space-x-1 TradeGodthicCn">
                            <span className="w-6 hidden lg:block">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M13.9461 2.09411C12.8248 1.13855 11.1756 1.13856 10.0544 2.0941L8.70636 3.24286C8.54619 3.37935 8.34705 3.46183 8.13728 3.47857L6.3718 3.61946C4.90327 3.73665 3.73714 4.90278 3.61995 6.3713L3.47907 8.13678C3.46234 8.34654 3.37983 8.54573 3.24334 8.70589L2.09458 10.0539C1.13904 11.1752 1.13905 12.8243 2.0946 13.9455L3.24336 15.2936C3.37983 15.4538 3.46232 15.6529 3.47906 15.8627L3.61997 17.6281C3.73716 19.0966 4.9033 20.2627 6.37184 20.3799L8.13729 20.5209C8.34705 20.5376 8.54615 20.6201 8.70631 20.7566L10.0543 21.9053C11.1756 22.8608 12.8248 22.8609 13.9461 21.9053L15.2941 20.7566C15.4542 20.6201 15.6533 20.5376 15.8631 20.5208L17.6286 20.3799C19.0971 20.2628 20.2632 19.0967 20.3805 17.6281L20.5213 15.8627C20.538 15.6529 20.6206 15.4537 20.757 15.2935L21.9058 13.9456C22.8614 12.8243 22.8614 11.1751 21.9058 10.0539L20.757 8.70585C20.6205 8.54568 20.5381 8.34654 20.5214 8.13679L20.3805 6.37131C20.2633 4.9028 19.0971 3.73663 17.6286 3.61945L15.8631 3.47856C15.6533 3.46182 15.4542 3.37935 15.2941 3.24286L13.9461 2.09411ZM14.8284 7.75718L16.2426 9.1714L9.17151 16.2425L7.7573 14.8282L14.8284 7.75718ZM10.2322 10.232C9.64638 10.8178 8.69664 10.8178 8.11085 10.232C7.52506 9.6463 7.52506 8.69652 8.11085 8.11073C8.69664 7.52494 9.64638 7.52494 10.2322 8.11073C10.818 8.69652 10.818 9.6463 10.2322 10.232ZM13.7677 15.8889C13.1819 15.3031 13.1819 14.3534 13.7677 13.7676C14.3535 13.1818 15.3032 13.1818 15.889 13.7676C16.4748 14.3534 16.4748 15.3031 15.889 15.8889C15.3032 16.4747 14.3535 16.4747 13.7677 15.8889Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                            <span className="text-base">
                              - {product.discount}%
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </>
        );
      })}
    </>
  );
};

export default CardProduct;
