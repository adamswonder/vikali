import React from "react";
import { Link as NavLink } from "react-router-dom";

function NavBar({ searchChange, cart }) {
  return (
    <div className="navbar">
      <NavLink to="/app/products" className="h1">
        VIKALI
      </NavLink>
      <input
        id="search"
        type="text"
        placeholder="Search here ..."
        onChange={(e) => searchChange(e.target.value)}
      />
      <NavLink to="/" className="cart">
        <i class="fa-solid fa-user"></i>
        <br />
        Account
      </NavLink>
      <NavLink to="/app/cart" className="cart">
        <i class="fa-solid fa-cart-shopping"></i>
        {cart.length === 0 ? null : (
          <sup className="supscript">{cart.length}</sup>
        )}
        <br />
        Cart
      </NavLink>
    </div>
  );
}

export default NavBar;
