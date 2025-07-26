import { Link } from "react-router-dom";

function HeaderNavList() {
  return (
    <>
      <li className="py-3 text-center">
        <Link to="/">Home</Link>
      </li>
      <li className="py-3 text-center">
        <Link to="/about">About</Link>
      </li>
      <li className="py-3 text-center">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="py-3 text-center">
        <Link to="/signup">Sign Up</Link>
      </li>
    </>
  );
}

export default HeaderNavList;
