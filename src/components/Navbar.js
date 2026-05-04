import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="logo">Movies App</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/about">About</Link>
      </div>

    </nav>
  );
}

export default Navbar;