import React from 'react'
import { NavLink } from 'react-router-dom'

function Categories() {
    <nav className="categories">
        <NavLink to="/" exact activeClassName="current">
            Home
        </NavLink>
        <NavLink to="/electronics" activeClassName="current">
            Electronics
        </NavLink>
        <NavLink to="/fashion" activeClassName="current">
            Fashion
        </NavLink>
    </nav>
}

export default Categories