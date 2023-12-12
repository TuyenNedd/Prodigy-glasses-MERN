import { useParams } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

const ProductDetailsPage = () => {
  const { id } = useParams();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ height: "100%", margin: "0 auto" }}>
        <ProductDetails idProduct={id} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
