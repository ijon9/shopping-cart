import { useState } from 'react'
import Nav from './Nav.jsx'

function Home({ cart }) {
  // const [count, setCount] = useState(0)


  return (
    <>
      <Nav cart={cart}/>
     <div>Select Shop to start shopping!</div>
     <div>Select Cart to checkout!</div>
    </>
  )
}

export default Home
