import { useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { selectCartItemCount } from "../../store/slices/cartSlice";
import { setSearchTerm, selectSearchTerm } from "../../store/slices/productSlice";
import { selectIsAuthenticated, logout } from "../../store/slices/userSlice";

function RightHeaderContent() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isDown, setIsDown] = useState(false);
  
  const cartItemCount = useAppSelector(selectCartItemCount);
  const searchTerm = useAppSelector(selectSearchTerm);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate("/Store");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsDown(false);
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/Cart");
  };

  return (
    <>
      {/* Search */}
      <form onSubmit={handleSearchSubmit} className="relative flex items-center">
        <CiSearch className="absolute right-3 text-lg cursor-pointer" onClick={handleSearchSubmit} />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="rounded-xl border p-2 text-sm shadow-lg pr-10 w-48"
          placeholder="Search products..."
        />
      </form>

      {/* Wishlist */}
      <div className="flex cursor-pointer gap-2 hover:text-[#DB4444] transition-colors">
        <CiHeart className="text-2xl" />
        <span className="md:hidden">Wishlist</span>
      </div>

      {/* Cart */}
      <div
        className="relative flex cursor-pointer gap-2 hover:text-[#DB4444] transition-colors"
        onClick={handleCartClick}
      >
        <div className="relative">
          <CiShoppingCart className="text-2xl" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              {cartItemCount > 99 ? '99+' : cartItemCount}
            </span>
          )}
        </div>
        <span className="md:hidden">Cart ({cartItemCount})</span>
      </div>

      {/* User with Dropdown */}
      <div
        className="relative flex cursor-pointer gap-2 hover:text-[#DB4444] transition-colors"
        onClick={() => setIsDown(!isDown)}
      >
        <CiUser className="text-2xl" />
        <span className="md:hidden">
          {isAuthenticated ? 'Account' : 'Login'}
        </span>

        {isDown && (
          <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-xl border border-gray-200 bg-white p-3 text-sm text-black shadow-lg">
            <ul className="flex flex-col gap-3">
              {isAuthenticated ? (
                <>
                  <li
                    className="hover:text-[#DB4444] cursor-pointer"
                    onClick={() => {
                      navigate("/settings");
                      setIsDown(false);
                    }}
                  >
                    Manage My Account
                  </li>
                  <li
                    className="hover:text-[#DB4444] cursor-pointer"
                    onClick={() => {
                      navigate("/Cart");
                      setIsDown(false);
                    }}
                  >
                    My Orders
                  </li>
                  <li className="hover:text-[#DB4444] cursor-pointer">My Reviews</li>
                  <hr className="border-gray-200" />
                  <li
                    className="hover:text-[#DB4444] cursor-pointer text-red-600"
                    onClick={handleLogout}
                  >
                    Log Out
                  </li>
                </>
              ) : (
                <>
                  <li
                    className="hover:text-[#DB4444] cursor-pointer"
                    onClick={() => {
                      navigate("/login");
                      setIsDown(false);
                    }}
                  >
                    Login
                  </li>
                  <li
                    className="hover:text-[#DB4444] cursor-pointer"
                    onClick={() => {
                      navigate("/signup");
                      setIsDown(false);
                    }}
                  >
                    Sign Up
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default RightHeaderContent;
