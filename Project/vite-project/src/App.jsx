import { useState } from 'react'
import * as React from "react";
import { createRoot } from "react-dom/client";
import { ROUTES } from './Routes/index'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
const routes = createBrowserRouter(ROUTES)
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <RouterProvider router={routes} />
   
   </>
  )
}

export default App
