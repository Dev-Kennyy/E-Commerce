import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { selectCartItems, selectCartSubtotal, selectCartItemCount, clearCart } from "../store/slices/cartSlice";
import CartTable from "../components/CartTable";

function CartPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartSubtotal);
  const itemCount = useAppSelector(selectCartItemCount);

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate("/CheckOut");
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <div className="mb-4 text-sm text-gray-600">
          <span
            className="cursor-pointer hover:underline"
            onClick={() => navigate("/")}
          >
            Home
          </span>{" "}
          / <span className="text-black">Cart</span>
        </div>
        
        <div className="py-16">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some products to get started!</p>
          <button
            onClick={() => navigate("/Store")}
            className="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-red-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-4 text-sm text-gray-600">
        <span
          className="cursor-pointer hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </span>{" "}
        / <span className="text-black">Cart ({itemCount} items)</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border-b px-10 py-3 font-semibold">Product</th>
              <th className="border-b px-4 py-3 font-semibold">Price</th>
              <th className="border-b px-4 py-3 font-semibold">Quantity</th>
              <th className="border-b px-4 py-3 font-semibold">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <CartTable key={item.id} item={item} />
            ))}
          </tbody>
        </table>
        
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleClearCart}
            className="text-red-500 hover:text-red-700 underline"
          >
            Clear Cart
          </button>
          
          <div className="text-right">
            <div className="text-lg mb-2">
              <span className="font-semibold">Total: </span>
              <span className="text-2xl font-bold text-[#DB4444]">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/Store")}
                className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </button>
              <button
                onClick={handleCheckout}
                className="bg-[#DB4444] text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
