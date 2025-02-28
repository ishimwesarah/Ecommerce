import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Shop from './components/Shop';
import Vendors from './components/vendors';
import Blog from './components/Blog';
import Contact from './components/contact';
import Login from './components/Login';
import Registration from './components/Registration';
import Homepage from './components/HomePage';
import SinglePage from './components/SinglePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendorSingle from './components/vendorsinglepage';
import ShopSingle from './components/shopsingle';
import HomeProduct from './components/HomeProduct';
import DashboardLayout from './Dashboard/DashboardLayout';
import DashboardView from './Dashboard/DashboardView';
import ProductList from './Dashboard/Product.jsx';
import CategoryList from './Dashboard/Dashcat.jsx';
import Notifi from './Dashboard/Noti.jsx';
import Notifications from './Dashboard/Noti.jsx';
import Orders from './Dashboard/orders.jsx';
import DashVendors from './Dashboard/vendors.jsx';
import DashBlogs from './Dashboard/blogs.jsx';
import DashContact from './Dashboard/contact.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode); // Add/remove dark-mode class to body
  };

  return (
    <BrowserRouter className="app-container">
      {/* Pass toggleDarkMode to the Layout component */}
      <Routes>
        <Route path="/" element={<Layout toggleDarkMode={toggleDarkMode} />}>
          <Route path="/" index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/vendor" element={<Vendors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/view" element={<Homepage />} />
          <Route path="/singlecard/:id" element={<SinglePage />} />
          <Route path="/vendorsible/:id" element={<VendorSingle />} />
          <Route path="/shopping/:id" element={<ShopSingle />} />
          <Route path="/submitform" element={<HomeProduct />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/" element={<DashboardLayout />}>
          <Route path="/dashboard" index element={<DashboardView />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/category" element={<CategoryList />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Vendors" element={<DashVendors/>} />
          <Route path="/Blogs" element={<DashBlogs/>} />
          <Route path="/Orders" element={<Orders/>} />
          <Route path="/Contacts" element={<DashContact/>} />
          </Route>
          <Route path='/notifi' element={<Notifi/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
