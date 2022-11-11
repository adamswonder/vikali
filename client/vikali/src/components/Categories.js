import React from 'react'
import { NavLink } from 'react-router-dom'


function Categories() {
    return (
      <nav ActiveClassName="categories">
        <NavLink to="/app/products" ActiveClassName="current">
          Home
        </NavLink>
        <NavLink to="/app/electronics" ActiveClassName="current">
          Electronics
        </NavLink>
        <NavLink to="/app/fashion" ActiveClassName="current">
          Fashion
        </NavLink>
        <NavLink to="/app/shoes" ActiveClassName="current">
          Shoes
        </NavLink>
        <NavLink to="/app/groceries" ActiveClassName="current">
          Groceries
        </NavLink>
      </nav>
    );
}

export default Categories