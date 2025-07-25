function Product() {
  return (
    <div className="relative border bg-gray-50 p-2 shadow-2xl">
      <img src="Frame 611.png" alt="" />
      <div className="w-full bg-black text-center text-sm text-white">
        Add To Cart
      </div>
      <div className="pr-16 text-left">
        <h2 className="pt-2 text-sm font-semibold">HAVIT HV-G92 Gamepad</h2>
        <div className="flex">
          <p className="p-2 text-[#DB4444]">$120</p>
          <span className="p-2 text-gray-400 line-through">$120</span>
        </div>
        <span>⭐⭐⭐⭐⭐</span>
        <button className="absolute right-0 top-0 rounded bg-[#DB4444] p-1 text-[10px] font-extralight text-white">
          -40%
        </button>
      </div>
    </div>
  );
}

export default Product;
