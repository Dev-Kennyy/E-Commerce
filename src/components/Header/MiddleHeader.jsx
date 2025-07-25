import HeaderNavList from "./HeaderNavList";

function MiddleHeader() {
  return (
    <div className="">
      <ul className="hidden gap-6 text-[14px] md:flex">
        <HeaderNavList />
      </ul>
    </div>
  );
}

export default MiddleHeader;
