import { useNavigate } from "react-router-dom";

function Buttons() {
  const navigate = useNavigate("/");
  return (
    <div
      className="flex cursor-pointer justify-center"
      onClick={() => navigate("/store")}
    >
      <div className="inline-flex bg-[#DB4444] px-6 py-3 text-white">
        View All Products
      </div>
    </div>
  );
}

export default Buttons;
