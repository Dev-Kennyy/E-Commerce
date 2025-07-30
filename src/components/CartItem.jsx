function CartItem() {
  return (
    <div className="flex flex-col gap-6 pt-16">
      <div className="flex items-center justify-between gap-40">
        <div className="flex items-center gap-4">
          <img src="image 57.png" alt="GamePad" width="32" />
          <p className="text-xs">GamePad</p>
        </div>
        <p className="text-sm font-medium">$650</p>
      </div>

      <div className="flex items-center justify-between gap-40">
        <div className="flex items-center gap-2">
          <img src="g27cq4-500x500 1.png" alt="GamePad" width="32" />
          <p className="text-xs">GamePad</p>
        </div>
        <p className="text-sm font-medium">$650</p>
      </div>

      <hr className="my-2 border-t" />

      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold">Subtotal</p>
        <p className="text-sm font-bold">$1300</p>
      </div>
      <button className="bg-[#DB4444] p-2 text-white">Place Order</button>
    </div>
  );
}

export default CartItem;
