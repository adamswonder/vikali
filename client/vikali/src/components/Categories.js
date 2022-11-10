import React from 'react'
import { NavLink } from 'react-router-dom'


function Categories() {
    return (
        <nav className="categories">
            <NavLink to="/products" exact activeClassName="current">
                Home
            </NavLink>
            <NavLink to="/electronics" activeClassName="current">
                Electronics
            </NavLink>
            <NavLink to="/fashion" activeClassName="current">
                Fashion
            </NavLink>
            <NavLink to="/shoes" activeClassName="current">
                Shoes
            </NavLink>
            <NavLink to="/groceries" activeClassName="current">
                Groceries
            </NavLink>
        </nav>
    );
}

export default Categories