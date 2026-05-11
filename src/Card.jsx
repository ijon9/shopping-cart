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

function Card({ item }) {
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
    border: "1px solid black",
    borderRadius: "5px"
  }

  return (
    <>
     <div style={cardStyle}>
        {item.title} <br></br>
        <img src={item.image} style={imgStyle}></img>
        ${item.price}<br></br>
        <div>
          <label htmlFor={"quantity"+item.id}>Quantity:</label>
          <input id={"quantity"+item.id} type="number" style={{width: "50px", marginRight: "5px"}}></input>
          <button>Add to Cart</button>
        </div>
        
     </div>
    </>
  )
}

export default Card
