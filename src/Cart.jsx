import { useState } from 'react'
import Nav from './Nav.jsx'
// import './Nav.css'

function Cart( {items, cart, editCart} ) {

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }

  const imgStyle = {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  }

  const cartCardStyle = {
    display: "flex",
    border: "5px solid purple",
    borderRadius: "10px",
    padding: "10px",
    gap: "10px",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "10px"
  }

  const itemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }

  function getTotalCost() {
    let ans = 0;
    for(let key of Object.keys(cart)) {
      ans += items[key-1].price * cart[key];
    }
    return ans;
  }

  function updateCart(id) {
    const numDom = document.getElementById("update"+id);
    const amount = +numDom.value;
    editCart((prev) => {
      const next = {...prev};
      next[id] += amount;
      if(next[id] <= 0) delete next[id];
      numDom.value = null;
      return next;
    })
  }
  
  return (
    <>
    <Nav cart={cart}/>
     <h1 style={{textAlign: "center"}}>Cart</h1>
     <div style={containerStyle}>
      {Object.keys(cart).map((k) => {
        const item = items[k-1];
        return <div style={cartCardStyle} key={"cart"+item.id}>
          <div style={itemStyle}>
            {item.title}
            <img src={item.image} style={imgStyle}></img>
            x{cart[k]}<br></br>
            <div style={{fontWeight: "900", fontSize: "18px"}}>${(item.price * cart[k]).toFixed(2)}</div>
            
          </div>
          <div style={{display:"flex", gap: "10px"}}>
            +/-<input id={"update"+item.id} type="number" style={{height: "20px"}}></input>
            <button onClick={() => updateCart(item.id)}>Update</button>
          </div>
        </div>
      })}
      Total Price: <div style={{fontWeight: "900", fontSize: "25px"}}>${getTotalCost().toFixed(2)}</div>
      <button style={{width: "100px"}} onClick={() => editCart({})}>Checkout</button>

     </div>

    </>
  )
}

export default Cart
