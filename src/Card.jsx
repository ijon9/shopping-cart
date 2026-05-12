import { useState } from 'react'
// import './Nav.css'

  // {
  //   "id": 0,
  //   "title": "string",
  //   "price": 0.1,
  //   "description": "string",
  //   "category": "string",
  //   "image": "http://example.com"
  // }

function Card({ item, editCart }) {
  const cardStyle = {
    // height: "50px",
    // width: "50px",
    borderRadius: "10px",
    border: "5px solid purple",
    margin: "10px",
    padding: "10px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center"
  }
  
  const imgStyle = {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  }

  function addToCart() {
    const numDom = document.getElementById("quantity"+item.id);
    const amount = +numDom.value;
    editCart((prev) => {
      if(amount <= 0) {
        alert("Please select an amount greater than 0");
        return prev;
      }
      const next = {...prev};
      if(item.id in next) next[item.id] += amount;
      else next[item.id] = amount;
      numDom.value = null;
      return next;
    });
  }

  return (
    <>
     <div style={cardStyle}>
        {item.title} <br></br>
        <img src={item.image} style={imgStyle}></img>
        <div style={{fontWeight: "900", fontSize: "18px"}}>${item.price.toFixed(2)}</div>
        <div>
          <label htmlFor={"quantity"+item.id}>Quantity:</label>
          <input id={"quantity"+item.id} type="number" style={{width: "50px", marginRight: "5px"}}></input>
          <button onClick={() => addToCart()}>Add to Cart</button>
        </div>
        
     </div>
    </>
  )
}

export default Card
