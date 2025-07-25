import CategoryHeader from "../CategoryHeader";
import Products from "./Products";

function ExploreProduct() {
  return (
    <div className="p-6">
      <CategoryHeader p="Our Products" h2="Explore Our Product" />
      <Products />
    </div>
  );
}

export default ExploreProduct;
