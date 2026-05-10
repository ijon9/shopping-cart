import { useState, useEffect, Fragment } from 'react'
import Nav from './Nav.jsx'
import Card from './Card.jsx'

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setItems(data));
  }, []);

  // {
  //   "id": 0,
  //   "title": "string",
  //   "price": 0.1,
  //   "description": "string",
  //   "category": "string",
  //   "image": "http://example.com"
  // }
  
  return (
    items && 
    <>
    <Nav />
     <div>Shop</div>
     {/* {items.map((item => (
      <Fragment key={item.id}>
        {item.id}
        {item.title} 
        <br />
      </Fragment>
     )))} */}
     <div id="cardDiv">
      {items.map((item) => (
        <Card item={item}/>
      ))}
     </div>
    </>
  )
}

export default Shop
