import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

function RightHeaderContent() {
  return (
    <>
      <div className="relative flex items-center">
        <CiSearch className="absolute right-3 text-lg" />
        <input
          type="text"
          name=""
          id=""
          className="rounded-xl border p-1 text-sm shadow-lg"
          placeholder="Search Item..."
        />
      </div>
      <div className="flex gap-2">
        <CiHeart className="text-2xl" />
        <span className="md:hidden">Wishlist</span>
      </div>
      <div className="flex gap-2">
        <CiShoppingCart className="text-2xl" />
        <span className="md:hidden">Cart</span>
      </div>
    </>
  );
}

export default RightHeaderContent;
