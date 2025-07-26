import { useState } from "react";
import LeftHeader from "./LeftHeader";
import MiddleHeader from "./MiddleHeader";
import RightHeader from "./RightHeader";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderNavList from "./HeaderNavList";
import RightHeaderContent from "./RightHeaderContent";

function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative flex items-center justify-between border-b border-gray-300 p-6">
      <LeftHeader />
      <MiddleHeader />
      <RightHeader />
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "❌" : <RxHamburgerMenu />}
      </button>
      <div
        className={`absolute left-0 top-20 flex w-full transform flex-col items-center gap-6 bg-white transition-transform md:hidden ${isOpen ? "" : "hidden"}`}
      >
        <ul className="md:hiddenz flex flex-col items-center justify-center">
          <HeaderNavList />
        </ul>
        <div className="flex flex-col-reverse items-center gap-6">
          <RightHeaderContent />
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
