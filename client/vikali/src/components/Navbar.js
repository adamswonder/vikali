import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({searchChange}) {
  return (
    <div className="navbar">
      <div className="left">
        <h1>VIKALI</h1>
      </div>
      <div className="center">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => searchChange(e.target.value)}
        />
      </div>
      <div className="right">
      <NavLink to="/cart" className="cart"><i class="fa-solid fa-cart-shopping"></i> Cart</NavLink>
      </div>
    </div>
  );
}

export default NavBar;