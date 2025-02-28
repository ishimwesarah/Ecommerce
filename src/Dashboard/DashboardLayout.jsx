import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import DashNavbar from './Dashoard-Navbar'

const DashboardLayout = () => {
  return (
    <div>
      <DashNavbar/>
    <Sidebar/>
    <Outlet/>
    </div>
  )
}

export default DashboardLayout