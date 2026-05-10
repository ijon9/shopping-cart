import { useState } from 'react'
import Nav from './Nav.jsx'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
     <div>Select Shop to start shopping!</div>
     <div>Select Cart to checkout!</div>
    </>
  )
}

export default Home
