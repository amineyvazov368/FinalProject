import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from "../../conponent/Admin/Navbar"
import AdminHeader from "../../conponent/Admin/Navbar/AdminHeader"
const AdminRoot = () => {
  return (
   <>
  <AdminHeader/>
   <Outlet/>
  
   
   
   </>
  )
}

export default AdminRoot