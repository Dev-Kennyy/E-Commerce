import { useNavigate } from "react-router-dom";
import ProductLeft from "../components/ProductLeft";
import ProductRight from "../components/ProductRight";

function ClickedProduct() {
  const navigate = useNavigate("");
  return (
    <div>
      <div className="m-8 text-sm text-gray-500">
        <span className="cursor-pointer" onClick={() => navigate("/")}>
          Home
        </span>
        / <span className="text-black">Product</span>
      </div>
      <div className="f flex flex-wrap items-center justify-center gap-5 px-3 md:flex-nowrap xl:px-28">
        <ProductLeft />
        <ProductRight />
      </div>
    </div>
  );
}

export default ClickedProduct;
