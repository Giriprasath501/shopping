import React from "react";
import "../Style/Nav.css";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

function NavBar({ cart = [] }) {
  
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <nav className="navbar">
      <h2 className="logo">MyShop</h2>

      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/store" className="nav-link">
          Shop
        </NavLink>

        <NavLink to="/cart" className="nav-link cart-link">
          <FiShoppingCart size={18} style={{ marginRight: "4px" }} />
          Cart
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
