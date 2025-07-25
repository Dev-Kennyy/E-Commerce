import Product from "./Product";
import { MdOutlineTabletAndroid } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { SiPcgamingwiki } from "react-icons/si";

function Products() {
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-nowrap gap-6 px-4 pt-8">
        <div className="min-w-[120px]">
          <Product Icon={MdOutlineTabletAndroid} name="Phones" />
        </div>
        <div className="min-w-[120px]">
          <Product Icon={FaLaptopCode} name="Computers" />
        </div>
        <div className="min-w-[120px]">
          <Product Icon={BsSmartwatch} name="Smart Watch" />
        </div>
        <div className="min-w-[120px]">
          <Product Icon={CiCamera} name="Camera" />
        </div>
        <div className="min-w-[120px]">
          <Product Icon={CiHeadphones} name="HeadPhones" />
        </div>
        <div className="min-w-[120px]">
          <Product Icon={SiPcgamingwiki} name="Gaming" />
        </div>
      </div>
    </div>
  );
}

export default Products;
