import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./main.css"


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from './AboutUs.tsx';
import Navbar from './Navbar.tsx';
import ProductDetail from './ProductDetail.tsx';



const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/product",
        element: <ProductDetail />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)