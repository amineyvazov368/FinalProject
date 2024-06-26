import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from "../../conponent/Admin/Navbar"
import Footer from "../../conponent/Footer"
const AdminRoot = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   
   
   </>
  )
}

export default AdminRoot