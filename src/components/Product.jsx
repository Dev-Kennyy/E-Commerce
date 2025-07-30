import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToCart, selectIsProductInCart } from "../store/slices/cartSlice";
import { setSelectedProduct } from "../store/slices/productSlice";

function Product({ product }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isInCart = useAppSelector((state) => selectIsProductInCart(state, product.id));

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking add to cart
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const handleProductClick = () => {
    dispatch(setSelectedProduct(product));
    navigate(`/product?id=${product.id}`);
  };

  const renderStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div
      className="relative cursor-pointer border bg-gray-50 p-2 shadow-2xl transition-transform hover:scale-105"
      onClick={handleProductClick}
    >
      <img 
        src={product.image} 
        alt={product.name}
        className="h-48 w-full object-cover mb-2"
      />
      
      <button
        onClick={handleAddToCart}
        className={`w-full text-center text-sm transition-colors ${
          isInCart 
            ? 'bg-green-600 text-white' 
            : 'bg-black text-white hover:bg-gray-800'
        }`}
      >
        {isInCart ? 'Added to Cart' : 'Add To Cart'}
      </button>
      
      <div className="pr-16 text-left">
        <h2 className="pt-2 text-sm font-semibold line-clamp-2">{product.name}</h2>
        <div className="flex items-center">
          <p className="p-2 text-[#DB4444] font-bold">${product.price}</p>
          {product.originalPrice > product.price && (
            <span className="p-2 text-gray-400 line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <div className="flex items-center">
          <span className="text-yellow-400">{renderStars(product.rating)}</span>
          <span className="ml-2 text-xs text-gray-500">({product.rating})</span>
        </div>
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold">Out of Stock</span>
          </div>
        )}
        
        {product.discount > 0 && (
          <button className="absolute right-0 top-0 rounded bg-[#DB4444] p-1 text-[10px] font-extralight text-white">
            -{product.discount}%
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
