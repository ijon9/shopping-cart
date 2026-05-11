import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from "react-router";
import "./main.css"
// import Home from './Home.jsx'
// import Shop from './Shop.jsx'
// import Cart from './Cart.jsx'
import App from './App.jsx'
// import { useState, useEffect} from 'react'

// Useeffect for shopping cart here

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
