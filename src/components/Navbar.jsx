import React from 'react'
import { Link, NavLink } from 'react-router'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="navigate">
          <NavLink to="/create">Create Article</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/registar">Registar</NavLink>
        </div>
    </div>
  )
}

export default Navbar
