import React, { useRef } from "react";
import Product from "../Product";

function Products() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 200 : -200,
        behavior: "smooth",
      });
    }
  };

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
        className="tailwind-scrollbar-hide flex items-center gap-3 overflow-x-auto scroll-smooth pt-9"
        ref={scrollRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Products;
