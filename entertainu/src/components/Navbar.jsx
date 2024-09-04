import React from 'react'
import '../Navbar.css'
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
 
    <nav className="navbar">
        <div className="navbar-logo">
            EntertainU
        </div>
        <div className="navbar-links">
            <Link to="/">Home</Link>
        </div>
    </nav>


    
    </>
  )
}
