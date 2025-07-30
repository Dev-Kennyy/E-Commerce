import { createSlice } from '@reduxjs/toolkit';

// Mock product data - In a real app, this would come from an API
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    discount: 40,
    image: "Frame 611.png",
    category: "gaming",
    rating: 5,
    inStock: true,
    description: "High-quality gaming controller with ergonomic design",
    features: ["Wireless connectivity", "Ergonomic design", "Long battery life"]
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    image: "ak-900-01-500x500 1.png",
    category: "electronics",
    rating: 4,
    inStock: true,
    description: "Mechanical keyboard with RGB lighting",
    features: ["Mechanical switches", "RGB backlighting", "USB-C connection"]
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    discount: 30,
    image: "g27cq4-500x500 1.png",
    category: "monitors",
    rating: 5,
    inStock: true,
    description: "27-inch IPS LCD monitor perfect for gaming",
    features: ["27-inch display", "IPS panel", "144Hz refresh rate"]
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    discount: 25,
    image: "sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
    category: "furniture",
    rating: 4,
    inStock: true,
    description: "Ergonomic office chair with lumbar support",
    features: ["Lumbar support", "Adjustable height", "Premium materials"]
  },
  {
    id: 5,
    name: "LCD Monitor",
    price: 650,
    originalPrice: 650,
    discount: 0,
    image: "g92-2-500x500 1.png",
    category: "monitors",
    rating: 4,
    inStock: true,
    description: "High-resolution LCD monitor for professional use",
    features: ["4K resolution", "Color accurate", "Multiple inputs"]
  },
  {
    id: 6,
    name: "RGB Liquid CPU Cooler",
    price: 170,
    originalPrice: 170,
    discount: 0,
    image: "gammaxx-l240-argb-1-500x500 1.png",
    category: "components",
    rating: 5,
    inStock: false,
    description: "Advanced liquid cooling system with RGB lighting",
    features: ["Liquid cooling", "RGB lighting", "Quiet operation"]
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    originalPrice: 660,
    discount: 0,
    image: "gp11-pro-1-500x500 1.png",
    category: "gaming",
    rating: 4,
    inStock: true,
    description: "Professional gaming controller with precision controls",
    features: ["Precision controls", "Customizable buttons", "Tournament ready"]
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: 750,
    originalPrice: 750,
    discount: 0,
    image: "672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png",
    category: "fashion",
    rating: 3,
    inStock: true,
    description: "Premium quilted jacket with satin finish",
    features: ["Satin finish", "Quilted design", "Premium quality"]
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'gaming', name: 'Gaming' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'monitors', name: 'Monitors' },
  { id: 'furniture', name: 'Furniture' },
  { id: 'components', name: 'Components' },
  { id: 'fashion', name: 'Fashion' }
];

const initialState = {
  products: MOCK_PRODUCTS,
  categories: CATEGORIES,
  filteredProducts: MOCK_PRODUCTS,
  selectedProduct: null,
  
  // Filters
  searchTerm: '',
  selectedCategory: 'all',
  sortBy: 'name', // name, price-low, price-high, rating
  priceRange: { min: 0, max: 2000 },
  
  // Loading states
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },

    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },

    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },

    filterProducts: (state) => {
      let filtered = [...state.products];

      // Filter by search term
      if (state.searchTerm) {
        const searchLower = state.searchTerm.toLowerCase();
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower)
        );
      }

      // Filter by category
      if (state.selectedCategory !== 'all') {
        filtered = filtered.filter(product => product.category === state.selectedCategory);
      }

      // Filter by price range
      filtered = filtered.filter(product => 
        product.price >= state.priceRange.min && product.price <= state.priceRange.max
      );

      // Sort products
      filtered.sort((a, b) => {
        switch (state.sortBy) {
          case 'price-low':
            return a.price - b.price;
          case 'price-high':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          case 'discount':
            return b.discount - a.discount;
          case 'name':
          default:
            return a.name.localeCompare(b.name);
        }
      });

      state.filteredProducts = filtered;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    clearFilters: (state) => {
      state.searchTerm = '';
      state.selectedCategory = 'all';
      state.sortBy = 'name';
      state.priceRange = { min: 0, max: 2000 };
      state.filteredProducts = state.products;
    },
  },
});

// Selectors
export const selectAllProducts = (state) => state.products.products;
export const selectFilteredProducts = (state) => state.products.filteredProducts;
export const selectCategories = (state) => state.products.categories;
export const selectSelectedProduct = (state) => state.products.selectedProduct;

export const selectSearchTerm = (state) => state.products.searchTerm;
export const selectSelectedCategory = (state) => state.products.selectedCategory;
export const selectSortBy = (state) => state.products.sortBy;
export const selectPriceRange = (state) => state.products.priceRange;

export const selectProductsLoading = (state) => state.products.isLoading;
export const selectProductsError = (state) => state.products.error;

// Get product by ID
export const selectProductById = (state, productId) =>
  state.products.products.find(product => product.id === parseInt(productId));

// Get products by category
export const selectProductsByCategory = (state, category, limit = null) => {
  const categoryProducts = state.products.products.filter(product => product.category === category);
  return limit ? categoryProducts.slice(0, limit) : categoryProducts;
};

// Get featured/best selling products (products with rating >= 4)
export const selectBestSellingProducts = (state, limit = 4) =>
  state.products.products
    .filter(product => product.rating >= 4)
    .slice(0, limit);

// Get new arrivals (last added products)
export const selectNewArrivals = (state, limit = 4) =>
  state.products.products.slice(-limit);

// Get flash sale products (products with discounts)
export const selectFlashSaleProducts = (state, limit = 4) =>
  state.products.products
    .filter(product => product.discount > 0)
    .slice(0, limit);

// Get in-stock products
export const selectInStockProducts = (state) =>
  state.products.products.filter(product => product.inStock);

export const {
  setSearchTerm,
  setSelectedCategory,
  setSortBy,
  setPriceRange,
  setSelectedProduct,
  filterProducts,
  setLoading,
  setError,
  clearFilters,
} = productSlice.actions;

export default productSlice.reducer;