// import { useState } from "react";
// import LeftHeader from "./LeftHeader";
// import MiddleHeader from "../MiddleHeader";
// import RightHeader from "./LeftHeader";
// import { FiAlignRight } from "react-icons/fi";
// import MiddleListHeader from "./MiddleListHeader";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="gap-15 border-b-1 relative flex items-center justify-between px-7 py-5 shadow-sm">
//       <LeftHeader />
//       <MiddleHeader />
//       <RightHeader />
//       <button
//         className="block cursor-pointer lg:hidden"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         hi
//       </button>
//       <div
//         className={`absolute inset-0 left-0 top-28 flex w-full transform flex-col items-center gap-6 bg-black transition-transform sm:hidden ${isOpen ? "opacity-100" : "opacity-0"}`}
//       >
//         <ul className="sm:hidden">
//           <MiddleListHeader />
//           <RightHeader />
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Header;
