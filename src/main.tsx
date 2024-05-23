import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./main.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from './AboutUs.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
