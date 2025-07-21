import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, UserCircle, Search, Menu } from 'lucide-react';
import '../styles/Navbar.css';

function Navbar() {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItemCount, setCartItemCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartItemCount(total);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="navbar">

    <div className="navbar-left">
      <Link to="/" className="logo">
        <img
          src="/logo.jpg"
          alt="Mongoe Logo"
          className="logo-img"
        />
      </Link>
    </div>

      <div className="navbar-center">
        <Link to="/clothing" className="nav-link">Clothing</Link>
        <Link to="/blanket" className="nav-link">Blankets</Link>
        <Link to="/gadget" className="nav-link">Gadgets</Link>
      </div>

      <div className="navbar-right">
        <form className="search-container" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-icon">
            <Search />
          </button>
        </form>

        <Link to="/cart" className="cart-container">
          <ShoppingCart className="icon" />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>

        <div className="user-dropdown">
          <UserCircle
            className="icon"
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
          />
          {userDropdownOpen && (
            <div className="dropdown-menu user-menu">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/orders">My Orders</Link>
              <Link to="/account">My Account</Link>
              <button onClick={() => alert("Logged out")}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
