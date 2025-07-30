import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

function OrderStuff() {
  return (
    <div className="border pt-4">
      <div className="flex items-center p-4">
        <TbTruckDelivery className="gap-2 text-[45px] font-light" />
        <p className="inline-flex flex-col">
          <span>Free Delivery</span>
          <span> Enter your postal code for Delivery Availability</span>
        </p>
      </div>
      <div className="flex items-center gap-2 border p-4">
        <MdOutlinePublishedWithChanges className="text-[45px] font-light" />
        <p className="inline-flex flex-col">
          <span>Return Delivery</span>
          <span>Free 30 Days Delivery Returns. Details</span>
        </p>
      </div>
    </div>
  );
}

export default OrderStuff;
