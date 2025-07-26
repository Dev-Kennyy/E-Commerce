import ArrivalLeft from "./ArrivalLeft";
import ArrivalRight from "./ArrivalRight";

function ArrivalProducts() {
  return (
    <div className="flex justify-center gap-5 pt-9 md:justify-start lg:pl-36">
      <ArrivalLeft />
      <ArrivalRight />
    </div>
  );
}

export default ArrivalProducts;
