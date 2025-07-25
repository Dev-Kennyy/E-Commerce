import BestSellingHeader from "./BestSellingHeader";
import Products from "./Products";

function BestSelling() {
  return (
    <>
      <div className="items-baseline p-9 sm:flex sm:justify-between">
        <BestSellingHeader />
        <button className="rounded bg-[#DB4444] p-2 text-white">
          View All
        </button>
      </div>
      <Products />
    </>
  );
}

export default BestSelling;
