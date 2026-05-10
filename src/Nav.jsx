import { useState } from 'react'
import { Link } from "react-router"
import './Nav.css'

function Nav() {
  {/* Props: count */}
  const cartStyle = {
    display: "flex",
    gap: "5px"
  }

  return (
    <>
     <div id="navbar">
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/shop"> Shop </Link>
        </div>
        <div style={cartStyle}>
          <Link to="/cart"> Cart </Link>
          <div id="count">

          </div>
        </div>
     </div>
    </>
  )
}

export default Nav
