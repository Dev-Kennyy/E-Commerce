import Categories from "../components/Categories.jsx";
import FlashSaleCategory from "../components/Today-Flash Sale/FlashSaleCategory.jsx";
import Header from "../components/Header.jsx";
import ProductCategory from "../components/BrowseCategory/ProductCategory.jsx";
import BestSelling from "../components/BestSellingProduct/BestSelling.jsx";
import Image from "../components/Image Container/Image.jsx";
import ExploreProduct from "../components/ExploreProduct/ExploreProduct.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <Categories />
      <FlashSaleCategory />
      <ProductCategory />
      <BestSelling />
      <Image />
      <ExploreProduct />
    </>
  );
}

export default HomePage;
