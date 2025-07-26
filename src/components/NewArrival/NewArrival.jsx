import CategoryHeader from "../CategoryHeader";
import ArrivalProducts from "./ArrivalProducts";

function NewArrival() {
  return (
    <div className="p-8 pt-24">
      <CategoryHeader p="Featured" h2="New Arrival" />
      <ArrivalProducts />
    </div>
  );
}

export default NewArrival;
