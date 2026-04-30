import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export default function Navbar() {
  const { cart, search, setSearch, darkMode, setDarkMode } = useContext(ProductContext);

  return (
    <nav className="navbar"  className={`navbar ${darkMode ? "dark" : ""}`}>

      {/* LOGO */}
      <Link to="/" className="logo">
        🛒 Easykart
      </Link>

      {/* SEARCH */}
      <input
        className="search"
        type="text"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* NAV LINKS */}
      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-count">{cart.length}</span>
        </Link>
      </div>


      <button
        className="dark-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

    </nav>
  );
} 