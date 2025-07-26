import Exclusive from "./Footer/Exclusive";
import Support from "./Footer/Support";
import Account from "./Footer/Account";
import QuickLink from "./Footer/QuickLink";

function Footer() {
  return (
    <footer className="justify-left bottom-0 mt-9 flex w-full flex-wrap gap-10 bg-black p-5 pl-11 pt-9 text-white">
      <Exclusive />
      <Support />
      <Account />
      <QuickLink />
    </footer>
  );
}

export default Footer;
