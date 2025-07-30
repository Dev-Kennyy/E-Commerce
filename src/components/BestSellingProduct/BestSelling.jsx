import { useNavigate } from "react-router-dom";
import BestSellingHeader from "./BestSellingHeader";
import Products from "./Products";

function BestSelling() {
  const navigate = useNavigate("");
  return (
    <>
      <div className="items-baseline p-9 sm:flex sm:justify-between">
        <BestSellingHeader />
        <button
          className="rounded bg-[#DB4444] p-2 text-white"
          onClick={() => navigate("/store")}
        >
          View All
        </button>
      </div>
      <Products />
    </>
  );
}

export default BestSelling;
