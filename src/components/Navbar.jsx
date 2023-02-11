import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <Link to={"/"} className="header-link">
        <h1>Login</h1>
      </Link>
    </header>
  );
}

export default Navbar;
