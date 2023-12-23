import "./style.scss";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import * as ProductService from "../../services/ProductService";
import { convertPrice } from "../../utils.js";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const ResultProductSearch = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 100);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(6);
  // eslint-disable-next-line no-unused-vars
  const [typeProducts, setTypeProducts] = useState([]);

  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1];
    const search = context?.queryKey && context?.queryKey[2];
    const res = await ProductService.getAllProduct(search, limit);
    return res;
  };

  const fetchAllTypeProduct = async () => {
    setLoading(true);
    const res = await ProductService.getAllTypeProduct();
    if (res?.status === "OK") {
      setLoading(false);
      setTypeProducts(res?.data);
    } else {
      setLoading(false);
    }
  };

  const { isLoading, data: products } = useQuery(
    ["products", limit, searchDebounce],
    fetchProductAll,
    {
      retry: 3,
      retryDelay: 1000,
      keepPreviousData: false,
    }
  );

  useEffect(() => {
    fetchAllTypeProduct();
  }, [searchDebounce]);

  const navigate = useNavigate();
  const handleDetailsProduct = (id) => {
    navigate(`/product-details/${id}`);
  };

  const headerSearch = document.querySelector(".header-search");

  const inputClickClose = () => {
    headerSearch.classList.remove("show-results");
    document.body.style.overflowY = "auto";
  };
  return (
    <>
      {searchDebounce !== "" && (
        <>
          {loading || isLoading ? (
            <CircularProgress style={{ color: "var(--primaryColor)" }} />
          ) : products?.data?.length > 0 ? (
            <>
              <div className="search-results__product w-full pt-4 lg:order-2 order-1 ">
                <p className="lg:text-base text-sm font-custom-1 uppercase tracking-wider leading-tight text-secondary lg:mb-5 mb-4 px-0 lg:px-0 TradeGodthic-BoldCn">
                  Suggested Products:
                </p>
                <div className="search-results__product-grid lg:grid gap-2.5 lg:grid-cols-3 flex no-scrollbar">
                  {products?.data?.map((product) => (
                    <>
                      <a
                        onClick={() => {
                          handleDetailsProduct(product._id);
                          inputClickClose();
                        }}
                        key={product._id}
                        className="search-result__link no-underline "
                      >
                        <div className="h-full">
                          <div className="seach-result h-full bg-white p-3.5 rounded-md">
                            <div className="search-result__image-wrapper aspect-w-1 aspect-h-1 mb-2 relative">
                              <img
                                className="search-result__image absolute top-0 left-0 w-full h-full object-contain"
                                src={product.image}
                                alt="D28 | Reading Glasses"
                              />
                            </div>

                            <div className="search-result__title clamp-2 my-1 leading-snug product-title product_item--title type--label-m TradeGodthic-BoldCn uppercase">
                              {product.name}
                              <span className="block text-xs font-body TradeGodthicCn uppercase">
                                {product.type}
                              </span>
                            </div>
                            <div className="search-result__price text-xs">
                              {convertPrice(
                                product.price -
                                  (product?.price * product?.discount) / 100
                              )}
                            </div>
                          </div>
                        </div>
                      </a>
                    </>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p className="text-base tracking-wide pt-4 TradeGodthicCn">
              Hmm..looks like we don’t have that. Try searching again:
            </p>
          )}
        </>
      )}
    </>
  );
};

export default ResultProductSearch;
