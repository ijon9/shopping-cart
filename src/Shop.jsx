import { useState, useEffect, Fragment } from 'react'
import Nav from './Nav.jsx'
import Card from './Card.jsx'

function Shop( { editCart, cart, items } ) {
  // {
  //   "id": 0,
  //   "title": "string",
  //   "price": 0.1,
  //   "description": "string",
  //   "category": "string",
  //   "image": "http://example.com"
  // }

  const cardDiv = {
    display: "flex",
    flexWrap: "wrap"
  }

  return ( 
    <>
    <Nav cart={cart} />
     <h1 style={{textAlign: "center"}}>Shop</h1>
     <div style={cardDiv}>
      {items.map((item) => (
        <Card key={item.id} item={item} editCart={editCart}/>
      ))}
     </div>
    </>
  )
}

export default Shop
