import { useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import CartItem from "../components/CartItem";

function PaymentPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="p-2 py-7 text-sm text-gray-500">
        <span
          className="cursor-pointer hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <span className="mx-1">/</span>
        <span>My Account</span>
        <span className="mx-1">/</span>
        <span>Product</span>
        <span className="mx-1">/</span>
        <span className="cursor-pointer" onClick={() => navigate("/cart")}>
          View Cart
        </span>
        <span className="mx-1">/</span>
        <span className="font-medium text-black">CheckOut</span>
      </div>
      <div className="flex flex-col justify-center gap-8 px-3 pt-2 sm:flex-row">
        <div className="">
          <h1 className="text-2xl">Billing Details</h1>
          <div className="flex flex-col gap-4">
            <PasswordInput type="text" label="First Name" />
            <PasswordInput type="text" label="Company Name" />
            <PasswordInput type="text" label="Street Address" />
            <PasswordInput type="text" label="Town/City" />
            <PasswordInput type="tel" label="Phone Number" />
            <PasswordInput type="mail" label="Email Address" />
            <div className="flex gap-2 text-sm">
              <input type="checkbox" />
              <span>Save this information for faster check-out next time</span>
            </div>
          </div>
        </div>
        <div>
          <CartItem />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
