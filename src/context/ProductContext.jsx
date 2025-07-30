import { createContext, useContext, useState, useEffect } from 'react';

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
    description: "High-quality gaming controller with ergonomic design"
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
    description: "Mechanical keyboard with RGB lighting"
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
    description: "27-inch IPS LCD monitor perfect for gaming"
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
    description: "Ergonomic office chair with lumbar support"
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
    description: "High-resolution LCD monitor for professional use"
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
    description: "Advanced liquid cooling system with RGB lighting"
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
    description: "Professional gaming controller with precision controls"
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
    description: "Premium quilted jacket with satin finish"
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

// Create context
const ProductContext = createContext();

// Product Provider Component
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState(MOCK_PRODUCTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name'); // name, price-low, price-high, rating
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [loading, setLoading] = useState(false);

  // Filter and sort products
  useEffect(() => {
    let filtered = [...products];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, sortBy, priceRange]);

  // Get product by ID
  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };

  // Get products by category
  const getProductsByCategory = (category, limit = null) => {
    const categoryProducts = products.filter(product => product.category === category);
    return limit ? categoryProducts.slice(0, limit) : categoryProducts;
  };

  // Get featured/best selling products (mock logic)
  const getBestSellingProducts = (limit = 4) => {
    return products
      .filter(product => product.rating >= 4)
      .slice(0, limit);
  };

  // Get new arrivals (mock logic - last added products)
  const getNewArrivals = (limit = 4) => {
    return products.slice(-limit);
  };

  // Get flash sale products (products with discounts)
  const getFlashSaleProducts = (limit = 4) => {
    return products
      .filter(product => product.discount > 0)
      .slice(0, limit);
  };

  const value = {
    // Data
    products,
    filteredProducts,
    categories: CATEGORIES,
    
    // Filters
    searchTerm,
    selectedCategory,
    sortBy,
    priceRange,
    loading,
    
    // Actions
    setSearchTerm,
    setSelectedCategory,
    setSortBy,
    setPriceRange,
    
    // Helper functions
    getProductById,
    getProductsByCategory,
    getBestSellingProducts,
    getNewArrivals,
    getFlashSaleProducts
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

// Custom hook
export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}