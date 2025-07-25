function Image() {
  return (
    <div className="m-2 flex flex-wrap-reverse items-center gap-9 bg-black p-10 sm:m-10 sm:flex-nowrap">
      <div>
        <p className="text-[10px] text-[#00FF66]">Categories</p>
        <h1 className="pt-9 text-3xl text-white">
          Enhance Your Music Experience
        </h1>
        <div className="flex gap-4">
          <span className="rounded-full bg-yellow-50 p-3 text-center">
            <p className="text-[13px] font-semibold">23</p>
            <p className="text-[11px]">Days</p>
          </span>
          <span className="rounded-full bg-yellow-50 p-3 text-center">
            <p className="text-[13px] font-semibold">23</p>
            <p className="text-[11px]">Hours</p>
          </span>
          <span className="rounded-full bg-yellow-50 p-3 text-center">
            <p className="text-[13px] font-semibold">23</p>
            <p className="text-[11px]">Minutes</p>
          </span>
          <span className="rounded-full bg-yellow-50 p-3 text-center">
            <p className="text-[13px] font-semibold">23</p>
            <p className="text-[11px]">Seconds</p>
          </span>
        </div>
        <button className="mt-4 rounded bg-[#00FF66] p-3 text-white">
          Buy Now
        </button>
      </div>
      <div className="">
        <img src="JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png" alt="" />
      </div>
    </div>
  );
}

export default Image;
