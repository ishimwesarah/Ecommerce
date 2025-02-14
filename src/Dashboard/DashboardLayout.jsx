import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import DashNavbar from './Dashoard-Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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