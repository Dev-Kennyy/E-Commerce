import Buttons from "../Buttons";
import CategoryHeader from "../CategoryHeader";
import Products from "./Products";
import TimeLeft from "./TimeLeft";

function FlashSaleCategory({ children }) {
  return (
    <>
      <div className="items-left flex flex-col lg:pt-14 xl:mx-28">
        <div className="flex flex-col content-baseline items-baseline gap-6 p-6 align-baseline sm:flex-row md:gap-32">
          <CategoryHeader p={"Todays"} h2={"Flash Sales"} />
          <TimeLeft />
        </div>
        <Products />
      </div>
      <Buttons>{children}</Buttons>
    </>
  );
}

export default FlashSaleCategory;
