import React from 'react'
import { NavLink } from 'react-router-dom'

function Categories() {
  let activeStyle = {
    color: "orange",
  };
    return (      <nav className="categories">
        <NavLink to="/app/products" style={({isActive}) => isActive ? activeStyle : undefined}>
          Home
        </NavLink>
        <NavLink to="/app/electronics" style={({isActive}) => isActive ? activeStyle : undefined}>
          Electronics
        </NavLink>
        <NavLink to="/app/fashion" style={({isActive}) => isActive ? activeStyle : undefined}>
          Fashion
        </NavLink>
        <NavLink to="/app/shoes" style={({isActive}) => isActive ? activeStyle : undefined}>
          Shoes
        </NavLink>
        <NavLink to="/app/groceries" style={({isActive}) => isActive ? activeStyle : undefined}>
          Groceries
        </NavLink>
      </nav>
    );
}

export default Categories