import { useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function RightHeaderContent() {
  const navigate = useNavigate("/");
  const [isDown, setIsDown] = useState(false);

  return (
    <>
      {/* Search */}
      <div className="relative flex items-center">
        <CiSearch className="absolute right-3 text-lg" />
        <input
          type="text"
          className="rounded-xl border p-1 text-sm shadow-lg"
          placeholder="Search Item..."
        />
      </div>

      {/* Wishlist */}
      <div className="flex cursor-pointer gap-2">
        <CiHeart className="text-2xl" />
        <span className="md:hidden">Wishlist</span>
      </div>

      {/* Cart */}
      <div
        className="flex cursor-pointer gap-2"
        onClick={() => navigate("/cart")}
      >
        <CiShoppingCart className="text-2xl" />
        <span className="md:hidden">Cart</span>
      </div>

      {/* User with Dropdown */}
      <div
        className="relative flex cursor-pointer gap-2"
        onClick={() => setIsDown(!isDown)}
      >
        <CiUser className="text-2xl" />
        <span className="md:hidden">User</span>

        {isDown && (
          <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-xl border border-white/20 bg-white/20 p-3 text-sm text-black shadow-lg backdrop-blur-md">
            <ul className="flex flex-col gap-4">
              <li
                className="hover:text-red-500"
                onClick={() => navigate("/settings")}
              >
                Manage My Account
              </li>
              <li
                className="hover:text-red-500"
                onClick={() => navigate("/cart")}
              >
                Manage Order
              </li>
              <li className="hover:text-red-500">Cancellation</li>
              <li className="hover:text-red-500">My Reviews</li>
              <li className="hover:text-red-500">Log Out</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default RightHeaderContent;
