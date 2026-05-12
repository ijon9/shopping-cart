import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './Home.jsx'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'

function App( ) {
  const [cart, setCart] = useState({})
  const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setItems(data));
  }, []);

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Home cart={cart}/>
      },
      {
        path: "/shop",
        element: <Shop items={items} editCart={setCart} cart={cart}/>
      },
      {
        path: "/cart",
        element: <Cart items={items} cart={cart} editCart={setCart}/>
      }
    ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
