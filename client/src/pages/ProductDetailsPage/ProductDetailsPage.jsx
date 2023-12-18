import { useParams } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from "../../services/ProductService";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { isLoading, data: productDetails } = useQuery(
    ["product-details", id],
    ProductService.getDetailsProduct
  );
  return (
    <>
      <Helmet>
        <title>
          {productDetails
            ? `${productDetails.name} | ${productDetails.type} - Prodigy`
            : "Product Details - Prodigy"}
        </title>
      </Helmet>
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ height: "100%", margin: "0 auto" }}>
          <ProductDetails idProduct={id} />
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
