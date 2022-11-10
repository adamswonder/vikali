import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({searchChange}) {
  return (
    <div className="navbar">
        <NavLink to="/products" className="h1">VIKALI</NavLink>
        <input
          type="text"
          placeholder="Search here ..."
          onChange={(e) => searchChange(e.target.value)}
        />
      <NavLink to="/signin" className="cart"><i class="fa-solid fa-user"></i>  Account</NavLink>
      <NavLink to="/cart" className="cart"><i class="fa-solid fa-cart-shopping"></i> Cart</NavLink>
    </div>
  );
}

export default NavBar;