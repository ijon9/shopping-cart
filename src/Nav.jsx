import { useState, useEffect } from 'react'
import { Link } from "react-router"
import './Nav.css'

function Nav( { cart } ) {
  const cartStyle = {
    display: "flex",
    gap: "5px"
  }

  const [totalItems, setTotalItems] = useState(getTotalItems());

  function getTotalItems() {
    let ans = 0;
    for(let key of Object.keys(cart)) {
      ans += cart[key];
    }
    return ans;
  }

  useEffect(() => {
    setTotalItems((prev) => {
      return getTotalItems();
    })
  }, [cart])

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
          {totalItems !== 0 
          ? <div id="count">{totalItems}</div>
           : <div id="countPlace"></div>}
        </div>
     </div>
    </>
  )
}

export default Nav
