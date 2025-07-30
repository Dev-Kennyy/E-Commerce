import { useState } from "react";

function CartTable() {
  const [quantity, setQuantity] = useState(1);
  const price = 650;
  const subtotal = quantity * price;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  return (
    <>
      <tr className="border-b hover:bg-gray-50">
        <td className="flex items-center gap-3 px-4 py-2">
          <img
            src="g92-2-500x500 1.png"
            alt="LCD Monitor"
            className="h-10 w-10 object-cover"
          />
          <span>LCD Monitor</span>
        </td>
        <td className="px-4 py-2">${price}</td>
        <td className="px-4 py-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrement}
              className="rounded border px-2 text-lg font-bold"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleIncrement}
              className="rounded border px-2 text-lg font-bold"
            >
              +
            </button>
          </div>
        </td>
        <td className="px-4 py-2">${subtotal}</td>
      </tr>
    </>
  );
}

export default CartTable;
