import Product from "../Product";

function Products() {
  return (
    <div className="flex flex-nowrap gap-5 overflow-x-auto p-10">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default Products;
