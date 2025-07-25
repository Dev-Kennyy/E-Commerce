function Product({ Icon, name }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded border p-6 text-2xl text-gray-700 shadow-xl transition-colors hover:bg-[#DB4444] hover:text-white">
      <Icon />
      <p className="whitespace-nowrap text-sm font-medium">{name}</p>
    </div>
  );
}
export default Product;
