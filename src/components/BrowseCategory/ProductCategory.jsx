import CategoryHeader from "../CategoryHeader";
import Products from "./Products";
function ProductCategory() {
  return (
    <div className="items-left flex flex-col p-7 lg:pt-14 xl:mx-28">
      <CategoryHeader p="Categories" h2="Browse Categories" />
      <Products />
    </div>
  );
}

export default ProductCategory;
