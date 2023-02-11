import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <Link to={"/"} className="header-link">
        <h1>Authentication</h1>
      </Link>
      <Link to={"/crud"} className="header-link">
        <h1>Crud</h1>
      </Link>
    </header>
  );
}

export default Navbar;
