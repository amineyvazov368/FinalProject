import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from "../../conponent/Client/Navbar"
import Footer from "../../conponent/Footer"
const ClientRoot = () => {
  return (
    <>
     <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default ClientRoot