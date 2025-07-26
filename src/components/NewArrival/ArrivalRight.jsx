function ArrivalRight() {
  return (
    <div className="items-left flex flex-col justify-center gap-2">
      <div className="flex w-full max-w-md flex-col items-center justify-center">
        <div className="relative">
          <img
            src="attractive-woman-wearing-hat-posing-black-background 1.png"
            alt="Women's Collections"
            className="h-auto w-full object-cover opacity-90"
          />
          <div className="absolute bottom-6 left-4 max-w-[80%] rounded bg-black/60 p-4 text-white">
            <h2 className="text-xl font-bold">Women’s Collections</h2>
            <p className="text-sm">
              Featured woman collections that give you another vibe.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="relative bg-black/90 p-3">
          <img
            src="/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
            alt=""
            width="90px"
          />
          <div className="text-white">
            <h2 className="font-bold">Speakers</h2>
            <p className="text-[10px]">Amazon wireless speakers</p>
          </div>
        </div>
        <div className="relative bg-black/90 p-3">
          <img src="652e82cd70aa6522dd785109a455904c.png" alt="" width="90px" />
          <div className="text-white">
            <h2 className="font-bold">Perfume</h2>
            <p className="text-[10px]">Smell nice buy for someone</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArrivalRight;
