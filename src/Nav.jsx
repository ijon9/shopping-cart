import { useState } from 'react'
import { Link } from "react-router"
import './Nav.css'

function Nav( { cart } ) {
  const cartStyle = {
    display: "flex",
    gap: "5px"
  }

  // const length = Object.keys(user).length;

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
          {Object.keys(cart).length !== 0 
          ? <div id="count">{Object.keys(cart).length}</div>
           : <div id="countPlace"></div>}
        </div>
     </div>
    </>
  )
}

export default Nav
