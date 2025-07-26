function ArrivalLeft() {
  return (
    <div className="relative hidden w-full max-w-md md:block">
      <div className="bg-black">
        <img
          src="ps5-slim-goedkope-playstation_large 1.png"
          alt="PlayStation 5"
          className="h-auto w-full object-cover"
        />
        <div className="absolute bottom-40 left-4 space-y-1 rounded bg-black/60 p-2 text-white">
          <p className="text-lg font-bold">PlayStation 5</p>
          <p className="text-[10px]">
            Black and White version of the PS5 coming out on sale.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArrivalLeft;
