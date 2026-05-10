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
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
    width: "250px"
  }
  
  const imgStyle = {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  }

  return (
    <>
     <div style={cardStyle}>
        {item.title} <br></br>
        <img src={item.image} style={imgStyle}></img>
     </div>
    </>
  )
}

export default Card
