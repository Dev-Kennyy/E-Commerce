import { FaArrowRight } from "react-icons/fa6";

function Right() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-6 bg-black p-5 md:gap-28">
      <div className="flex flex-col justify-center gap-6">
        <div className="flex items-center gap-2 text-sm text-white">
          <img src="1200px-Apple_gray_logo 1.png" alt="" width="20px" />
          <p>iPhone 14 Series</p>
        </div>
        <h2 className="text-nowrap text-[20px] text-white">
          Up to 10% <br /> off Voucher
        </h2>
        <p className="text-[11px] text-white">
          Shop Now <FaArrowRight />
        </p>
      </div>
      <div>
        <img
          src="hero_endframe__cvklg0xk3w6e_large 2.png"
          alt=""
          className="w-auto"
        />
      </div>
    </div>
  );
}

export default Right;
