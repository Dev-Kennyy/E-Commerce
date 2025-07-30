import React, { useRef } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectFlashSaleProducts } from "../../store/slices/productSlice";
import Product from "../Product";

function Products() {
  const scrollRef = useRef(null);
  const flashSaleProducts = useAppSelector((state) => selectFlashSaleProducts(state, 8));

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 300 : -300,
        behavior: "smooth",
      });
    }
  };

  if (flashSaleProducts.length === 0) {
    return (
      <div className="px-9 py-8 text-center text-gray-500">
        <p>No flash sale products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="relative mb-7 px-9">
      {/* Scroll Buttons */}
      <div className="absolute right-2 top-0 z-10 flex gap-2">
        <button
          onClick={() => handleScroll("left")}
          className="rounded-full bg-white px-3 py-2 text-black shadow-lg shadow-gray-700 hover:bg-gray-800 hover:text-white"
          aria-label="Scroll left"
        >
          &larr;
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="rounded-full bg-white px-3 py-2 text-black shadow-lg shadow-gray-700 hover:bg-gray-800 hover:text-white"
          aria-label="Scroll right"
        >
          &rarr;
        </button>
      </div>
      <div
        className="tailwind-scrollbar-hide flex items-center gap-4 overflow-x-auto scroll-smooth pt-9"
        ref={scrollRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {flashSaleProducts.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-64">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
