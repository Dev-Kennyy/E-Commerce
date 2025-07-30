import { createContext, useContext, useReducer, useEffect } from 'react';

// Cart Actions
const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  LOAD_CART: 'LOAD_CART'
};

// Cart Reducer
function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          )
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }]
      };
    }
    
    case CART_ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    
    case CART_ACTIONS.UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ).filter(item => item.quantity > 0)
      };
    
    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: []
      };
    
    case CART_ACTIONS.LOAD_CART:
      return {
        ...state,
        items: action.payload || []
      };
    
    default:
      return state;
  }
}

// Initial state
const initialState = {
  items: []
};

// Create contexts
const CartContext = createContext();
const CartDispatchContext = createContext();

// Cart Provider Component
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('ecommerce-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: CART_ACTIONS.LOAD_CART, payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('ecommerce-cart', JSON.stringify(cart.items));
  }, [cart.items]);

  // Calculate cart totals
  const cartTotals = {
    itemCount: cart.items.reduce((total, item) => total + item.quantity, 0),
    subtotal: cart.items.reduce((total, item) => total + (item.price * item.quantity), 0),
    get total() {
      // You can add tax, shipping, discounts here
      return this.subtotal;
    }
  };

  const cartWithTotals = {
    ...cart,
    ...cartTotals
  };

  return (
    <CartContext.Provider value={cartWithTotals}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

// Custom hooks
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (!context) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
}

// Action creators
export const cartActions = {
  addToCart: (product, quantity = 1) => ({
    type: CART_ACTIONS.ADD_TO_CART,
    payload: { ...product, quantity }
  }),
  
  removeFromCart: (productId) => ({
    type: CART_ACTIONS.REMOVE_FROM_CART,
    payload: { id: productId }
  }),
  
  updateQuantity: (productId, quantity) => ({
    type: CART_ACTIONS.UPDATE_QUANTITY,
    payload: { id: productId, quantity }
  }),
  
  clearCart: () => ({
    type: CART_ACTIONS.CLEAR_CART
  })
};