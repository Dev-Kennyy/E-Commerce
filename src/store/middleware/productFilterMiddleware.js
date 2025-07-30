import { filterProducts } from '../slices/productSlice';

// Middleware to automatically filter products when filters change
export const productFilterMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  
  // Actions that should trigger filtering
  const filterActions = [
    'products/setSearchTerm',
    'products/setSelectedCategory',
    'products/setSortBy',
    'products/setPriceRange'
  ];
  
  if (filterActions.includes(action.type)) {
    store.dispatch(filterProducts());
  }
  
  return result;
};