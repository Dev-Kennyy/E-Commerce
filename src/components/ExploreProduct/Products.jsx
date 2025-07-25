import Product from "../Product";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

function Products() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-8">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <button className="absolute mr-9 flex justify-center rounded-md bg-[#DB4444] p-2 text-center text-white">
        <FaRegArrowAltCircleDown />
      </button>
    </>
  );
}

export default Products;
