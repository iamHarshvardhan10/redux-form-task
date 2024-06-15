import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="border-2 px-10 py-2">
      <nav className="flex items-center justify-between">
        <div>
          <FaUser />
          {currentUser ? <span>{currentUser.email}</span> : null}
        </div>
        <ul className="flex items-center gap-4">
          <Link
            to="/"
            className="px-4 py-1 border-2 uppercase bg-black text-white"
          >
            <li>Sign Up</li>
          </Link>
          <Link
            to="sign-in"
            className="px-4 py-1  border-2 uppercase bg-black text-white"
          >
            <li>Sign In</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
