import Categories from "../components/Categories.jsx";
import FlashSaleCategory from "../components/Today-Flash Sale/FlashSaleCategory.jsx";
import ProductCategory from "../components/BrowseCategory/ProductCategory.jsx";
import BestSelling from "../components/BestSellingProduct/BestSelling.jsx";
import Image from "../components/Image Container/Image.jsx";
import ExploreProduct from "../components/ExploreProduct/ExploreProduct.jsx";
import NewArrival from "../components/NewArrival/NewArrival.jsx";
import All from "../components/AlmostFooter/All.jsx";

function HomePage() {
  return (
    <>
      <Categories />
      <FlashSaleCategory />
      <ProductCategory />
      <BestSelling />
      <Image />
      <ExploreProduct />
      <NewArrival />
      <All />
    </>
  );
}

export default HomePage;
