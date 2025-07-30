import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('ecommerce-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return [];
  }
};

// Save cart to localStorage
const saveCartToStorage = (cartItems) => {
  try {
    localStorage.setItem('ecommerce-cart', JSON.stringify(cartItems));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

const initialState = {
  items: loadCartFromStorage(),
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          ...product,
          quantity,
        });
      }

      // Save to localStorage
      saveCartToStorage(state.items);
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
      saveCartToStorage(state.items);
    },

    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => item.id === productId);
      
      if (item) {
        if (quantity <= 0) {
          // Remove item if quantity is 0 or negative
          state.items = state.items.filter(item => item.id !== productId);
        } else {
          item.quantity = quantity;
        }
        saveCartToStorage(state.items);
      }
    },

    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find(item => item.id === productId);
      
      if (item) {
        item.quantity += 1;
        saveCartToStorage(state.items);
      }
    },

    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find(item => item.id === productId);
      
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCartToStorage(state.items);
      }
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemCount = (state) => 
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartSubtotal = (state) => 
  state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
export const selectCartTotal = (state) => {
  const subtotal = selectCartSubtotal(state);
  // Add tax, shipping, discounts here if needed
  return subtotal;
};
export const selectCartIsLoading = (state) => state.cart.isLoading;
export const selectCartError = (state) => state.cart.error;

// Check if product is in cart
export const selectIsProductInCart = (state, productId) =>
  state.cart.items.some(item => item.id === productId);

// Get cart item by product ID
export const selectCartItemByProductId = (state, productId) =>
  state.cart.items.find(item => item.id === productId);

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  setLoading,
  setError,
} = cartSlice.actions;

export default cartSlice.reducer;