import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router'
import Authintification from '../services/Authintification'
import { revomeItem } from "../services/LocalStorage"
import { UserLogOut } from '../slice/auth-slice'

function Navbar() {
  const { loggedIn, user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const LogOut = () => {
    dispatch(UserLogOut())
    revomeItem("token")
    navigate("/login")
  }

  return (
    <div className='navbar'>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="navigate">
        {loggedIn ? (
          <div style={{ display: 'flex', height: "100%", alignItems: "center" }}>
            <div>
              <NavLink to="/create">Create Article</NavLink>
            </div>
            <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
              <p style={{ padding: "15px 20px 0px 20px" }}>{user.username}</p>
              <button className="btn btn-outline-danger w-100" onClick={LogOut} >
                Log out
              </button>
            </div>
          </div>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/registar">Registar</NavLink>
          </>
        )
        }
      </div>
    </div>
  )
}

export default Navbar
