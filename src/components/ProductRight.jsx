import OrderStuff from "./OrderStuff";
import ProductQuantity from "./ProductQuantity";

function ProductRight() {
  return (
    <div className="">
      <h2 className="font-semibold">Havic HV G-92 Gamepad</h2>
      <p>
        ⭐⭐⭐⭐⭐ <span className="text-gray-400">|</span>{" "}
        <span className="text-green-500">In Stock</span>
      </p>
      <h2 className="py-3 text-xl">$192.00</h2>
      <p>
        PlayStation 5 Controller Skin High quality vinyl with air channel
        adhesive for easy bubble free install & mess free removal Pressure
        sensitive.
      </p>
      {/* <div className="flex items-center gap-3">
        Size:
        <div className="flex items-center justify-center gap-3">
          <button className="rounded-lg border p-1">XS</button>
          <button className="rounded-lg border p-1">S</button>
          <button className="rounded-lg border p-1">M</button>
          <button className="rounded-lg border p-1">l</button>
          <button className="rounded-lg border p-1">XL</button>
        </div>
      </div> */}
      <div className="flex items-center gap-5">
        <ProductQuantity />
        <button className="rounded-md bg-[#DB4444] px-4 py-2 text-white">
          Add to Cart
        </button>
      </div>
      <OrderStuff />
    </div>
  );
}

export default ProductRight;
