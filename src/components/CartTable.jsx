import { useAppDispatch } from "../store/hooks";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../store/slices/cartSlice";
import { TrashIcon } from "@heroicons/react/24/outline";

function CartTable({ item }) {
  const dispatch = useAppDispatch();
  const subtotal = item.quantity * item.price;

  const handleIncrement = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrement = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="flex items-center gap-3 px-4 py-2">
        <img
          src={item.image}
          alt={item.name}
          className="h-12 w-12 object-cover rounded"
        />
        <div className="flex flex-col">
          <span className="font-medium">{item.name}</span>
          <button
            onClick={handleRemove}
            className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm mt-1"
          >
            <TrashIcon className="h-4 w-4" />
            Remove
          </button>
        </div>
      </td>
      <td className="px-4 py-2 font-medium">${item.price}</td>
      <td className="px-4 py-2">
        <div className="flex items-center gap-2">
          <button
            onClick={handleDecrement}
            className="rounded border px-3 py-1 text-lg font-bold hover:bg-gray-100 disabled:opacity-50"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="mx-2 min-w-[2rem] text-center">{item.quantity}</span>
          <button
            onClick={handleIncrement}
            className="rounded border px-3 py-1 text-lg font-bold hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </td>
      <td className="px-4 py-2 font-bold text-[#DB4444]">${subtotal.toFixed(2)}</td>
    </tr>
  );
}

export default CartTable;
