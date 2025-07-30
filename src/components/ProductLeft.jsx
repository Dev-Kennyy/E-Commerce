import SmallProduct from "./SmallProduct";

function ProductLeft() {
  return (
    <div className="flex flex-wrap-reverse items-center justify-center gap-4">
      <div className="flex flex-row gap-2">
        <SmallProduct src="image 57.png" />
        <SmallProduct src="image 57.png" />
        <SmallProduct src="image 57.png" />
      </div>
      <div className="rounded bg-gray-100 p-5">
        <img src="image 63.png" alt="" />
      </div>
    </div>
  );
}

export default ProductLeft;
