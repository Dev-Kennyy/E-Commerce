import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { 
  selectFilteredProducts, 
  selectCategories,
  selectSearchTerm,
  selectSelectedCategory,
  selectSortBy,
  setSearchTerm,
  setSelectedCategory,
  setSortBy,
  clearFilters
} from "../store/slices/productSlice";
import Product from "../components/Product";

function AllProduct() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectFilteredProducts);
  const categories = useAppSelector(selectCategories);
  const searchTerm = useAppSelector(selectSearchTerm);
  const selectedCategory = useAppSelector(selectSelectedCategory);
  const sortBy = useAppSelector(selectSortBy);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleCategoryChange = (categoryId) => {
    dispatch(setSelectedCategory(categoryId));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">All Products</h1>
        
        {/* Filters */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium mb-2">Search Products</label>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by name or description..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="rating">Rating (High to Low)</option>
                <option value="discount">Discount (High to Low)</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Showing {products.length} products
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
            <button
              onClick={handleClearFilters}
              className="text-[#DB4444] hover:text-red-600 text-sm underline"
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category.id
                  ? 'bg-[#DB4444] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold mb-2">No products found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
          <button
            onClick={handleClearFilters}
            className="bg-[#DB4444] text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllProduct;
