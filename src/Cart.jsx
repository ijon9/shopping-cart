import { useState } from 'react'
import Nav from './Nav.jsx'
// import './Nav.css'

function Cart( {items, cart} ) {


  return (
    <>
    <Nav cart={cart}/>
     <div>Cart</div>
    </>
  )
}

export default Cart
