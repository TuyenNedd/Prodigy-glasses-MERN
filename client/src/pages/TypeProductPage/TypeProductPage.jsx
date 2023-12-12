import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as ProductService from "../../services/ProductService";
import TypeProductBanner from "../../components/TypeProductBanner/TypeProductBanner.jsx";
import TypeProductHeader from "../../components/TypeProductHeader/TypeProductHeader.jsx";
import { typeBannersDesktop } from "./typeBanners.js";
import { typeBannersMobile } from "./typeBanners.js";
import { Skeleton } from "@mui/material";
import CardProduct from "../../components/CardProduct/CardProduct.jsx";

const TypeProductPage = () => {
  // const searchProduct = useSelector((state) => state?.product?.search);

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

  // Lấy thông tin của sản phẩm đầu tiên trong danh sách products
  const firstProduct = products.length > 0 ? products[0] : null;

  return (
    <>
      {loading ? (
        <Skeleton
          // animation="wave"
          variant="rectangular"
          height={440}
          sx={{ bgcolor: "grey.500" }}
        ></Skeleton>
      ) : (
        firstProduct && (
          <TypeProductBanner
            key={firstProduct._id}
            type={loading ? <Skeleton></Skeleton> : firstProduct.type}
            desktopBanner={typeBannersDesktop[firstProduct.type]}
            mobileBanner={typeBannersMobile[firstProduct.type]}
          />
        )
      )}
      {/* <TypeProductBanner></TypeProductBanner> */}
      <TypeProductHeader></TypeProductHeader>
      {/* {loading ? (
        <Skeleton></Skeleton>
      ) : (
      )} */}

      <section
        id="shopify-section-template--16133600149692__product-grid"
        className="shopify-section section--collection-product-grid"
      >
        <section className="relative flex flex-row w-full px-4 py-5 lg:px-8 lg:py-0 mx-auto collection-wrap 2xl:max-w-screen-2xl analyticsProductGridList">
          <div className="top-0 w-full animate active">
            <div className=" plp bg-white b--none">
              <div className="collection-container bg-nearest-white">
                <main className="product-grid__wrapper collection-products collection__product mx-0 grid grid-cols-2 lg:grid-cols-3 lg:gap-y-10 gap-y-6 lg:pt-10">
                  <CardProduct></CardProduct>
                </main>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <Loading isLoading={loading}> */}
      {/* {products.map((product) => {
      return (
        <TypeProductBanner
          key={product._id}
          type={product.type}
          desktopBanner={typeBannersDesktop[product.type]}
          mobileBanner={typeBannersMobile[product.type]}
        ></TypeProductBanner>
      );
    })} */}
    </>
  );
};

export default TypeProductPage;
