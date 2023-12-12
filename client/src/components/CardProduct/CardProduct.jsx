import { useLocation, useNavigate } from "react-router-dom";
import { convertPrice } from "../../utils.js";
import "./cart.scss";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce.js";
import { useEffect, useState } from "react";
import * as ProductService from "../../services/ProductService.js";
import { Skeleton } from "@mui/material";

const CardProduct = (props) => {
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
  const firstProduct = products.length > 0 ? products[0] : null;
  const {
    countInStock,
    description,
    image,
    imageHover,
    name,
    price,
    rating,
    type,
    discount,
    selled,
    id,
  } = props;
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
                        </div>

                        <figure className="product-item__image-wrapper">
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
                            <ul className="lg:flex hidden items-center mr-1">
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
                            </ul>

                            <span className="type--label-s product-item__color leading-snug  text-secondary hidden lg:block TradeGodthic-BoldCn text-xs uppercase tracking-wider">
                              + <span>7</span> Colors
                            </span>

                            <span className="type--label-s product-item__color leading-snug block text-secondary lg:hidden TradeGodthic-BoldCn text-xs uppercase tracking-wider">
                              + <span>10</span> Colors
                            </span>
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
                        <div className="leading-snug product-item__price flex space-x-2 TradeGodthicCn">
                          {convertPrice(product.price)}
                        </div>
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
